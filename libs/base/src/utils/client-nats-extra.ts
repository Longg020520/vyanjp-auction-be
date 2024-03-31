import { ClientNats } from '@nestjs/microservices';
// import { Agent } from 'elastic-apm-node';
import { Observable } from 'rxjs';

// @Injectable()
export class ClientNatsExtra {
  // private apm: Agent;
  private clientNats: ClientNats;

  constructor(clientNats: ClientNats) {
    // this.apm = apm;
    this.clientNats = clientNats;
  }

  static from(clientNats: ClientNats) {
    return new ClientNatsExtra(clientNats);
  }

  send<TResult = any, TInput = any>(
    pattern: any,
    data: TInput,
  ): Observable<TResult> {
    // const traceId = this.apm.currentTraceIds['trace.id'] || '';
    // const parentId = this.apm.currentTraceparent

    return this.clientNats.send(pattern, {
      traceParent: '1235',
      // traceParent: this.apm.currentTraceparent,
      value: data,
    });
  }

  // emit<TResult = any, TInput = any>(pattern: any, data: TInput): Observable<TResult>;
}
