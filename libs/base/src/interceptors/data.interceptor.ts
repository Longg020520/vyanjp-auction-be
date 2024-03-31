// import { APM_INSTANCE } from '@app/apm';
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
  // Inject,
} from '@nestjs/common';
import { RpcArgumentsHost } from '@nestjs/common/interfaces';
// import { Agent, Transaction } from 'elastic-apm-node';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

// function getUrlPath(input: string) {
//   return input.split('?')[0];
// }

/**
 * Dùng để xử lý headers, logging, ...
 */
@Injectable()
export class DataInterceptor<T> implements NestInterceptor<T, Response<T>> {
  private logger = new Logger(this.constructor.name);

  // constructor() {}

  intercept(host: ExecutionContext, next: CallHandler): Observable<any> {
    const type = host.getType();

    if (type == 'http') {
      return this.interceptHttp(host, next);
    }

    if (type == 'rpc') {
      return this.interceptRpc(host, next);
    }

    return next.handle();
  }

  private interceptHttp(
    host: ExecutionContext,
    next: CallHandler,
  ): Observable<any> {
    const request = host.switchToHttp().getRequest<Request>();
    const { originalUrl, body, query } = request;

    if (originalUrl === '/healthcheck') {
      return;
    }

    // const trans = this.apm.startTransaction(
    //   `${request.method.toUpperCase()} ${getUrlPath(originalUrl)}`,
    //   'http',
    // );

    // console.log('da vao day', next.handle());

    this.logger.log('http request', { originalUrl, body, query });

    return next.handle().pipe(
      map((value) => {
        Logger.log('http request end here with result', value);
        // trans.result = 'success';
        // trans.end();
        if (typeof value == 'object' && Array.isArray(value) == false) {
          // value.traceId = trans.ids['trace.id'];
        }
        return value;
      }),
    );
  }

  private interceptRpc(
    host: ExecutionContext,
    next: CallHandler,
  ): Observable<any> {
    const rpc: RpcArgumentsHost = host.switchToRpc();

    let eventName = 'unknow';
    let type = '';
    const { args } = rpc.getContext();
    if (args.length == 6) {
      // kafka
      eventName = args[2];
      type = 'kafka';
    } else if (args.length == 2) {
      // nats
      eventName = args[0];
      type = 'nats';
    } else {
      return next.handle().pipe(
        tap((result) => {
          console.log('result', result);
          // trans.result = result;
          // trans.end();
        }),
      );
    }

    // check data format
    let traceParent = '';
    let data: any;
    // let trans: Transaction;
    try {
      const rpcData = rpc.getData();
      data = rpcData.value;
      traceParent = rpcData.traceParent;

      // create APM transaction
      // trans = this.apm.startTransaction(`RPC ${eventName}`, type, {
      //   childOf: traceParent,
      // });
    } catch (error) {
      this.logger.error('interceptRpc got rpcData wrong format');
      // trans = this.apm.startTransaction(`RPC ${eventName}`, type);
    }

    Logger.log('[handle rpc message data interceptor]', {
      traceParent,
      eventName,
      type,
      // context: rpc.getContext(),
      data: data,
    });

    // this.logger.log('handle rpc message', {
    //   traceParent,
    //   eventName,
    //   type,
    //   // context: rpc.getContext(),
    //   data: data,
    // });

    // const now = Date.now();
    // return next.handle().pipe(tap(() => this.logger.log(`After... ${Date.now() - now}ms`)));
    return next.handle().pipe(
      map((responseData) => {
        // this.logger.log('responseData data', responseData);
        // trans.end();
        return responseData;
      }),
    );
  }
}
