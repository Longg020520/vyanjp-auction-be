import { ConfigurationService } from './configuration.service';
import {
  ConfigurationDocument,
  ConfigurationSchema,
} from './schemas/configuration.schema';
import { CacheModule, DynamicModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({})
export class ConfigurationModule {
  static forMongoose(): DynamicModule {
    return {
      module: ConfigurationModule,
      imports: [
        MongooseModule.forFeature([
          { name: ConfigurationDocument.name, schema: ConfigurationSchema },
        ]),
        CacheModule.register(),
      ],
      providers: [ConfigurationService],
      exports: [ConfigurationService],
    };
  }
}
