import { Global, Module, RequestMethod } from '@nestjs/common';
import { QueryHelperService } from './services/query-helper.service';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { DataInterceptor } from './interceptors';
import {
  ConfigModule,
  // ConfigService,
  //  ConfigService
} from '@nestjs/config';
import { join } from 'path';
import configuration from './utils/configuration';
import { HealthModule } from '@app/health';
// import { CustomLoggerService } from './services/custom-logger.service';
// import { ApmModule } from '@app/apm';
import { AllExceptionsFilter } from '@app/base/exception-filters';
import { LoggerModule } from 'nestjs-pino';
// import { SentryModule } from '@ntegral/nestjs-sentry';
// import * as yaml from 'js-yaml';
// import * as fs from 'fs';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [
        () =>
          configuration({
            path: process.env.configfile || join(__dirname, './config.yaml'),
          }),
      ],
      isGlobal: true,
    }),

    HealthModule,
    LoggerModule.forRoot({
      exclude: [
        { method: RequestMethod.ALL, path: 'healthcheck' },
        { method: RequestMethod.ALL, path: 'healthz' },
      ],
    }),
    // SentryModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (configService: ConfigService) => {
    //     const sentry = await configService.get('sentry');
    //     console.log('[Base module] sentry config', sentry);
    //     return {
    //       dsn: sentry.dns,
    //       debug: true,
    //       environment: sentry.env,
    //       logLevels: ['debug'], //based on sentry.io loglevel //
    //     };
    //   },

    //   inject: [ConfigService],
    // }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: DataInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    QueryHelperService,
    // CustomLoggerService,
  ],
  controllers: [],
  exports: [
    // -------
    QueryHelperService,
    // CustomLoggerService,
  ],
})
export class BaseModule {}
