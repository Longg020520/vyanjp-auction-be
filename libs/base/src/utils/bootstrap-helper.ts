// import { AllExceptionsFilter } from '@app/base/exception-filters';
// import { CustomLoggerService } from '@app/base/services/custom-logger.service';
import { INestApplication, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
// import { Logger as PinoLogger } from 'nestjs-pino';
import { ValidationPipe } from '../pipes';

export type BootstrapHelperOptions = {
  appName: string;
  enableNats: boolean;
  enableKafka: boolean;
};

export async function bootstrapHelper(
  app: INestApplication,
  options: BootstrapHelperOptions,
) {
  app.useGlobalPipes(new ValidationPipe());
  // app.useLogger(app.get(PinoLogger));

  // app.useLogger(app.TRANS_NOTIFYget(CustomLoggerService));
  // app.useGlobalFilters(new AllExceptionsFilter());
  const logger = new Logger(`bootstrap-${options.appName}`);

  const configService = app.get(ConfigService);

  // microservice #1 => dùng cho message partern, request-response
  if (options.enableNats) {
    app.connectMicroservice<MicroserviceOptions>(
      {
        transport: Transport.NATS,
        options: configService.get('msgbroker.nats'),
      },
      {
        inheritAppConfig: true,
      },
    );
  }

  // microservice #2 => dùng cho event, emit only
  if (options.enableKafka) {
    app.connectMicroservice<MicroserviceOptions>(
      {
        transport: Transport.KAFKA,
        options: configService.get('msgbroker.kafka'),
      },
      { inheritAppConfig: true },
    );
  }

  app.enableShutdownHooks();
  await app.startAllMicroservices();

  // const port = configService.get('app.port');

  await app.listen(11200);

  logger.log('listening on port', 11200);
}
