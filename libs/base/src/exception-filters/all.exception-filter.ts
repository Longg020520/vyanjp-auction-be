// import { APM_INSTANCE } from '@app/apm';
import {
  Catch,
  ArgumentsHost,
  Logger,
  // Inject,
  HttpException,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
// import { Agent } from 'elastic-apm-node';
import { BaseExceptionFilter, HttpAdapterHost } from '@nestjs/core';
import { of } from 'rxjs';
import { RpcException } from '@nestjs/microservices';
import * as Sentry from '@sentry/node';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  private logger = new Logger(this.constructor.name);

  constructor(readonly httpAdapterHost: HttpAdapterHost) {
    super();
    this.logger.log('AllExceptionsFilter init');
  }

  catch(error: Error, host: ArgumentsHost) {
    const type = host.getType();

    this.logger.error(
      `AllExceptionsFilter error occurred name: ${error.name}, type: ${type}`,
    );
    this.logger.error(error.message, error.stack, 'error1111');

    Sentry.captureException(error);

    // this.apm.captureError(error);

    if (error instanceof RpcException) {
      this.logger.error('isRpcException ' + error.getError());
    }

    if (type == 'http') {
      // console.log('catchHttpException da vao day', error);
      return this.catchHttpException(error, host);
    }

    if (type == 'rpc') {
      // return of({
      //   success: false,
      //   message: `${error.message}`,
      // });
      Sentry.captureException(error);
      return this.catchRPCException(error);
    }

    return super.catch(error, host);
  }

  // xảy ra khi handle http request, chủ yếu ở gateway
  catchHttpException(error, host) {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();

    const httpStatus =
      error instanceof HttpException
        ? error.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    console.log(error, 'error---------------');
    const responseBody = {
      statusCode: httpStatus,
      timestamp: new Date().toISOString(),
      path: httpAdapter.getRequestUrl(ctx.getRequest()),
      error: error.name,
      message:
        error.message == 'Forbidden resource'
          ? 'Sai APIKey'
          : error?.response?.message
          ? error?.response?.message
          : error?.message,
    };
    Sentry.captureException(error.name, {
      extra: responseBody,
    });

    return httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }

  // xảy ra khi handle kafka/nats message
  catchRPCException(error: Error) {
    if (error instanceof BadRequestException) {
      let extraData: any = {};
      if (typeof error.getResponse() == 'string') {
        extraData.response = error.getResponse();
      } else {
        extraData = { ...(error.getResponse() as any) };
      }
      Sentry.captureException({
        success: false,
        message: error.message,
        ...extraData,
      });
      return of({
        success: false,
        message: error.message,
        ...extraData,
      });
    }

    Sentry.captureException({
      success: false,
      message: error.message,
      error: error.name,
    });

    return of({
      success: false,
      message: error.message,
      error: error.name,
    });
  }
}
