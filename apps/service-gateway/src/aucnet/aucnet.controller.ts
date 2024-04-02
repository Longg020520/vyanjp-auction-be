import { Controller, Get, Param, Query } from '@nestjs/common';
import { AucnetService } from './aucnet.service';
import { QueryParse } from '@app/contracts';

@Controller('')
export class AucnetController {
  constructor(private readonly aucnetService: AucnetService) {}
  @Get('/aucnet/create/product/list')
  async createListProduct() {
    try {
      return await this.aucnetService.createListProduct();
    } catch (error) {
      return true;
    }
  }

  @Get('/aucnet/create/product/detail')
  async createProduct() {
    try {
      return await this.aucnetService.createManyProductDetail();
    } catch (error) {
      return true;
    }
  }

  @Get('/category/aucnet')
  async getAllCategoryAucnet(@Query() query: QueryParse) {
    try {
      return await this.aucnetService.getAllCategoryAucnet(query);
    } catch (error) {
      return true;
    }
  }

  @Get('/aucnet/product/list')
  async getListProductAucnet(@Query() query: QueryParse) {
    try {
      return await this.aucnetService.getListProductAucnet(query);
    } catch (error) {
      return true;
    }
  }

  @Get('/aucnet/product/detail/:uketsukeBng')
  async getProductDetailAucnet(@Param('uketsukeBng') uketsukeBng: string) {
    try {
      return await this.aucnetService.getProductDetailAucnet(uketsukeBng);
    } catch (error) {
      return true;
    }
  }
}
