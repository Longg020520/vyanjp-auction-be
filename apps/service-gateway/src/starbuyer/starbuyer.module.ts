import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { ScheduleModule } from '@nestjs/schedule';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CategoryStarBuyerDocument,
  CategoryStarBuyerSchema,
  ListProductStarBuyerDocument,
  ListProductStarBuyerSchema,
  ProductStarBuyerDetailDocument,
  ProductStarBuyerDetailSchema,
} from './schemas/starbuyer.schemas';
import { StarBuyerController } from './starbuyer.controller';
import { StarBuyerService } from './starbuyer.service';

@Module({
  imports: [
    // ScheduleModule.forRoot(),
    MongooseModule.forFeature([
      { name: CategoryStarBuyerDocument.name, schema: CategoryStarBuyerSchema },
      {
        name: ProductStarBuyerDetailDocument.name,
        schema: ProductStarBuyerDetailSchema,
      },
      {
        name: ListProductStarBuyerDocument.name,
        schema: ListProductStarBuyerSchema,
      },
    ]),
    HttpModule.register({ timeout: 7200000, maxRedirects: 5 }),
  ],
  controllers: [StarBuyerController],
  providers: [StarBuyerService],
})
export class StarBuyerModule {}
