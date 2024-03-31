import { bootstrapHelper } from '@app/base/utils';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: { origin: '*' },
    bufferLogs: true,
  });

  await bootstrapHelper(app, {
    appName: 'gateway',
    enableNats: false,
    enableKafka: false,
  });
}
bootstrap();
