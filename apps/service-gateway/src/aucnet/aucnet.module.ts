import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { ScheduleModule } from '@nestjs/schedule';
import { AucnetController } from './aucnet.controller';
import { AucnetService } from './aucnet.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CategoryAucnetDocument,
  CategoryAucnetSchema,
  ListProductAucnetDocument,
  ListProductAucnetSchema,
  ProductAucnetDetailDocument,
  ProductAucnetDetailSchema,
} from './schemas/aucnet.schemas';
// import { NotifyDocument, NotifySchema } from './schemas/notifi.schemas';

@Module({
  imports: [
    // ScheduleModule.forRoot(),
    MongooseModule.forFeature([
      { name: CategoryAucnetDocument.name, schema: CategoryAucnetSchema },
      { name: ListProductAucnetDocument.name, schema: ListProductAucnetSchema },
      {
        name: ProductAucnetDetailDocument.name,
        schema: ProductAucnetDetailSchema,
      },
    ]),
    HttpModule.register({ timeout: 7200000, maxRedirects: 5 }),
  ],
  controllers: [AucnetController],
  providers: [AucnetService],
})
export class AucnetModule {}
