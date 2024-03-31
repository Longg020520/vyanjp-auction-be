// Viết intercepter thay đổi data trước khi gửi đi

import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Inject,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import _ from 'lodash';
import { CLIENT_NATS } from '@app/base';
import { ClientNats } from '@nestjs/microservices';
import { Request } from 'express';

@Injectable()
export class HttpResponseInterceptor implements NestInterceptor {
  // private logger = new Logger(HttpResponseInterceptor.name);

  // private clientNats = ClientNatsExtra.from(this.nestNats);

  // constructor() {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    return next.handle().pipe(
      map(async (responseData) => {
        const data = responseData;

        // const response = context.switchToHttp().getResponse<Response>();
        const request = context.switchToHttp().getRequest<Request>();
        const { method, user } = request;

        // console.log(request, 'request');

        // console.log('responseData', responseData);

        const ommits = [];
        if (responseData && responseData.success === false) {
          const dataErr = {
            ...responseData,
            // timestamp: new Date().toISOString(),
            // path: request.url,
            success: false,
          };
          ommits.push(dataErr);
        }
        return {
          code: 200,
          data: ommits.length > 0 ? ommits[0] : data,
          timestamp: new Date().toISOString(),
          path: request.url,
          success: true,
        };

        // if (ommits.length > 0) {
        //   return {
        //     code: 200,
        //     data: ommits[0],
        //   };
        // } else {
        //   return data;
        // }
      }),
    );
  }
}
