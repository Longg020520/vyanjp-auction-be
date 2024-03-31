import { DynamicModule, Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientConfig } from './config.service';

import Configs from './constants';
import configuration from './utils/configuration';

@Global()
@Module({})
export class CustomConfigModule {
  static register(options: any): DynamicModule {
    return {
      module: CustomConfigModule,
      providers: [ClientConfig],
      exports: [ClientConfig],
      imports: [
        ConfigModule.forRoot({
          load: [() => Configs, () => configuration(options)],
          ignoreEnvFile: false,
          isGlobal: options.isGlobal || false,
          cache: true,
        }),
      ],
    };
  }
}
