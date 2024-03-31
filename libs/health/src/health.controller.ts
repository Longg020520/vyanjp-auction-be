import { Controller, Get } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
import { NatsOptions, Transport } from '@nestjs/microservices';
import {
  HealthCheck,
  HealthCheckService,
  MicroserviceHealthIndicator,
  MongooseHealthIndicator,
} from '@nestjs/terminus';

@Controller('')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private microservice: MicroserviceHealthIndicator,
    private mongooseHealth: MongooseHealthIndicator, // private configService: ConfigService,
  ) {}

  @Get('/healthcheck')
  @HealthCheck()
  check() {
    // const kafkaOptions = this.configService.get('msgbroker.kafka');
    // const natsOptions = this.configService.get('msgbroker.nats');
    // const mongodbOptions = this.configService.get('db.mongodb');

    const checkList = [];

    // if (kafkaOptions) {
    //   checkList.push(async () =>
    //     this.microservice.pingCheck<KafkaOptions>('kafka', {
    //       transport: Transport.KAFKA,
    //       options: { ...kafkaOptions, producerOnlyMode: true },
    //       timeout: 10000,
    //     }),
    //   );
    // }
    // if (natsOptions) {
    //   checkList.push(async () =>
    //     this.microservice.pingCheck<NatsOptions>('nats', {
    //       transport: Transport.NATS,
    //       options: natsOptions,
    //       timeout: 10000,
    //     }),
    //   );
    // }
    // if (mongodbOptions) {
    //   checkList.push(async () => this.mongooseHealth.pingCheck('mongodb'));
    // }

    return this.health.check([
      ...checkList,
      // async () =>
      //   this.microservice.pingCheck('redis', {
      //     transport: Transport.REDIS,
      //     options: {
      //       host: 'localhost',
      //       port: 6379,
      //     },
      //   }),
    ]);
    // return {
    //   status: 'Ready',
    //   version: '2.0',
    //   message: 'Service is ready',
    //   code: 200,
    // };
  }
}
