import { Controller, Get, Param, Query } from '@nestjs/common';
import { AucnetService } from './aucnet.service';
import { QueryParse } from '@app/contracts';

@Controller('')
export class AucnetController {
  constructor(private readonly aucnetService: AucnetService) {}
  @Get('/test')
  async sendSlackNotify() {
    try {
      return await this.aucnetService.tets();
    } catch (error) {
      return true;
    }
  }

  @Get('/create/product')
  async createProduct() {
    try {
      return await this.aucnetService.createManyProduct();
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
