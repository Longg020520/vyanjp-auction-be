import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TestingModuleType } from './types/testing.type';
import { loadYamlFile } from './utils';

@Module({})
export class TestingModule {
  static register(options: TestingModuleType): DynamicModule {
    const configs = loadYamlFile(options.configPath);

    // Import sẵn các module cần thiết cho toàn hệ thống
    const imports = [
      ConfigModule.forRoot({
        isGlobal: true,
        load: [() => configs],
      }),
      MongooseModule.forRoot(configs.db.mongodb.uri, {}),
    ];

    return {
      module: TestingModule,
      imports: imports,
    };
  }
}
