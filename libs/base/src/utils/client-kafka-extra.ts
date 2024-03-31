import { ClientKafka } from '@nestjs/microservices';
import { Agent } from 'elastic-apm-node';
import { Observable } from 'rxjs';

// @Injectable()
export class ClientKafkaExtra {
  private apm: Agent;
  private clientKafka: ClientKafka;

  constructor(clientKafka: ClientKafka, apm: Agent) {
    this.apm = apm;
    this.clientKafka = clientKafka;
    this.clientKafka.connect();
  }

  static from(clientKafka: ClientKafka, apm: Agent) {
    return new ClientKafkaExtra(clientKafka, apm);
  }

  // send<TResult = any, TInput = any>(pattern: any, data: TInput): Observable<TResult>

  emit<TResult = any, TInput = any>(
    pattern: any,
    data: TInput,
  ): Observable<TResult> {
    return this.clientKafka.emit(pattern, {
      value: {
        traceParent: '1235',
        // traceParent: this.apm.currentTraceparent,
        value: data,
      },
    });
  }
}
