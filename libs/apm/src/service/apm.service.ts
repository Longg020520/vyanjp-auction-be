import { Inject, Injectable, Logger } from '@nestjs/common';
import { ApmError, ApmFilter } from '../interface';
import APM from 'elastic-apm-node';
import { APM_OPTIONS } from '../constants';

@Injectable()
export class ApmService {
  apmInstance: APM.Agent;
  private logger = new Logger(this.constructor.name);

  constructor(@Inject(APM_OPTIONS) private options: Record<string, any>) {
    this.logger.log('ApmService init with options', options);
    this.apmInstance = APM.start({
      ...options,
      captureExceptions: false,
    });
  }

  public startTransaction(name: string | null, type: string | null): any {
    return this.apmInstance.startTransaction(name, type);
  }

  public addFilter(filter: ApmFilter): void {
    if (typeof filter === 'function') {
      this.apmInstance.addFilter(filter);
    } else {
      this.apmInstance.addFilter(filter.filter);
    }
  }

  public addErrorFilter(filter: ApmFilter): void {
    if (typeof filter === 'function') {
      this.apmInstance.addErrorFilter(filter);
    } else {
      this.apmInstance.addErrorFilter(filter.filter);
    }
  }

  public addTransactionFilter(filter: ApmFilter): void {
    if (typeof filter === 'function') {
      this.apmInstance.addTransactionFilter(filter);
    } else {
      this.apmInstance.addTransactionFilter(filter.filter);
    }
  }

  public addSpanFilter(filter: ApmFilter): void {
    if (typeof filter === 'function') {
      this.apmInstance.addSpanFilter(filter);
    } else {
      this.apmInstance.addSpanFilter(filter.filter);
    }
  }

  public captureError(error: ApmError): void {
    this.apmInstance.captureError(error);
  }

  public flush(callback: (err: Error) => void): void {
    this.apmInstance.flush(callback);
  }

  public setUserContext(
    id?: string | number,
    email?: string,
    username?: string,
  ): void {
    this.apmInstance.setUserContext({
      id,
      email,
      username,
    });
  }
}
