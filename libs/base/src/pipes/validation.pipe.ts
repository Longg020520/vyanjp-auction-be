import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { validate, ValidationError } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { languageMapping } from './validation.const';
// import { APP_CONFIG, ErrorException, ERROR_CODE } from '@vicomm/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform<T>(value: T, { metatype }: ArgumentMetadata): Promise<T> {
    if (value === null || !value) {
      value = Object.assign({}, value);
    }

    if (!metatype || !ValidationPipe.toValidate(metatype)) {
      return value;
    }

    const object = plainToClass(metatype, value);
    const errors = await validate(object, {
      forbidUnknownValues: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    });

    if (errors.length === 0) {
      return value;
    }

    //- Top-level errors
    const topLevelErrors: ValidationErrorDto[] = errors
      //- Top-level errors have the constraints here
      .filter((v) => v.constraints)
      .map((error) => ({
        property: error.property,
        constraints: Object.values(error.constraints as any),
      }));

    function mapConstraintToVietnamese(constraint) {
      const parts = constraint.split(' '); // Tách thành các phần
      const key = parts[0]; // Ghép các phần trước phần cuối lại
      const lastPart = parts.slice(1).join(' '); // Lấy phần cuối

      const mappedKey = languageMapping[key];
      const mappedLastPart = languageMapping[lastPart];

      // Kiểm tra nếu cả 2 phần đều được map thì ghép lại, nếu không thì trả về phần đầu và cuối không map
      return mappedKey && mappedLastPart
        ? `${mappedKey} ${mappedLastPart}`
        : constraint;
    }

    function mapConstraintsListToVietnamese(constraintsList) {
      return constraintsList.map((constraintsItem) => {
        return {
          ...constraintsItem,
          constraints: constraintsItem.constraints.map(
            mapConstraintToVietnamese,
          ),
        };
      });
    }

    const vietnameseConstraints =
      mapConstraintsListToVietnamese(topLevelErrors);

    //- Nested errors
    const nestedErrors: ValidationErrorDto[] = [];
    errors
      //- Nested errors do not have constraints here
      .filter((v) => !v.constraints)
      .forEach((error) => {
        const validationErrors = this.getValidationErrorsFromChildren(
          error.property,
          error.children,
        );
        nestedErrors.push(...validationErrors);
      });

    // console.log(nestedErrors, 'nestedErrors');

    const validationErrors = vietnameseConstraints.concat(nestedErrors);
    const errorProperties = validationErrors.map((e) => e.property).join(',');

    throw new BadRequestException({
      errors: validationErrors,
      message: `Lỗi xác thực với các thuộc tính [${errorProperties}]`,
    });
  }

  private static toValidate(metatype: any): boolean {
    const types: Array<() => any> = [String, Boolean, Number, Array, Object];

    return !types.includes(metatype);
  }

  private getValidationErrorsFromChildren(
    parent: string,
    children: ValidationError[],
    errors: ValidationErrorDto[] = [],
  ): ValidationErrorDto[] {
    children.forEach((child) => {
      if (child.constraints) {
        errors.push({
          property: `${parent}.${child.property}`,
          constraints: Object.values(child.constraints),
        });
      } else {
        return this.getValidationErrorsFromChildren(
          `${parent}.${child.property}`,
          child.children,
          errors,
        );
      }
    });

    return errors;
  }
}

interface ValidationErrorDto {
  property: string;
  constraints: string[];
}
