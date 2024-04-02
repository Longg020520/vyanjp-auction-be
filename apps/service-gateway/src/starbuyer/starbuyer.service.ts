import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import {
  CategoryStarBuyerDocument,
  ListProductStarBuyerDocument,
  ProductStarBuyerDetailDocument,
} from './schemas/starbuyer.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QueryParse } from '@app/contracts';
import { ClientQuery } from '@app/common';

@Injectable()
export class StarBuyerService {
  constructor(
    @InjectModel(CategoryStarBuyerDocument.name)
    private readonly categoryStarBuyerModel: Model<CategoryStarBuyerDocument>,

    @InjectModel(ListProductStarBuyerDocument.name)
    private readonly listProductStarBuyerModel: Model<ListProductStarBuyerDocument>,

    @InjectModel(ProductStarBuyerDetailDocument.name)
    private readonly productStarBuyerDetailModdel: Model<ProductStarBuyerDetailDocument>,

    private readonly httpService: HttpService,
  ) {}

  async getAllCategoryStarBuyer() {
    const data = await this.categoryStarBuyerModel.find({});
    return data;
  }

  async createProductStarBuyer() {
    const dataCreate = [];
    const data = await this.listProductStarBuyerModel.insertMany(dataCreate);
    return data;
  }

  async createProductDetailStarBuyer() {
    const dataCreate = [];
    const data = await this.productStarBuyerDetailModdel.insertMany(dataCreate);
    return data;
  }

  async getListProductStarbuyer(query: QueryParse) {
    const data = await new ClientQuery(this.listProductStarBuyerModel)
      .query(query)
      .build();
    return data;
  }

  async getListProductStarbuyerNumber(query: QueryParse) {
    const data = await new ClientQuery(this.listProductStarBuyerModel)
      .query(query)
      .build();
    return data.records.map((item) => item.productNumber);
  }

  async getProductDetailStarbuyer(productNumber: string) {
    const data = await this.productStarBuyerDetailModdel.findOne({
      'properties.ProductID': productNumber,
    });
    return data;
  }
}
