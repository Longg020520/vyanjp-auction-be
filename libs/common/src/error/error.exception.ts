// import { ERROR_CODE } from './error.constant';
// import { HttpException, HttpStatus } from '@nestjs/common';

// export type ErrorResponse = {
//   code: ERROR_CODE;
//   message?: string;
//   errors?: Record<string, any>[];
// };

// export type ErrorType = number | ErrorResponse;

// export class ErrorException extends HttpException {
//   constructor(error: ErrorType) {
//     if (typeof error === 'number') {
//       super({ code: error, message: 'An error occurred' }, HttpStatus.OK);
//     } else {
//       super(
//         {
//           ...error,
//           message: error.message || 'An error occurred',
//         },
//         HttpStatus.OK,
//       );
//     }
//   }
// }

import { HttpException, HttpStatus } from '@nestjs/common';

export class ErrorException extends HttpException {
  constructor(message: string, statusCode: HttpStatus) {
    super(message, statusCode);
  }
}
