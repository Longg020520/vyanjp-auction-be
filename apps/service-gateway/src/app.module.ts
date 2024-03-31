import { BaseModule } from '@app/base';
import { Module } from '@nestjs/common';
import {
  // ConfigModule,_
  ConfigService,
} from '@nestjs/config';
import { ClientNats } from '@nestjs/microservices';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { HttpResponseInterceptor } from './common/intercepters/http-response.intercepter';
import { MongooseModule } from '@nestjs/mongoose';
import { AucnetModule } from './aucnet/aucnet.module';

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpResponseInterceptor,
    },
    ClientNats,
  ],

  imports: [
    BaseModule,
    MongooseModule.forRootAsync({
      useFactory: async () => {
        return {
          uri: 'mongodb+srv://arrpusht:gtM5TvEUzjvTDo7z@cluster0.ds7ayqu.mongodb.net/service-auction',
        };
      },
      inject: [ConfigService],
    }),
    // ClientsModuleGlobal.registerAsync([
    //   {
    //     name: CLIENT_NATS,
    //     useFactory: (configService: ConfigService) => ({
    //       transport: Transport.NATS,
    //       options: configService.get('msgbroker.nats'),
    //     }),
    //     inject: [ConfigService],
    //   },
    // ]),
    AucnetModule,
  ],
})
export class AppModule {}
