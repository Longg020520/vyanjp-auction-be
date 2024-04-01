import { Controller, Get, Param, Query } from '@nestjs/common';
import { StarBuyerService } from './starbuyer.service';
import { QueryParse } from '@app/contracts';

@Controller('')
export class StarBuyerController {
  constructor(private readonly starBuyerService: StarBuyerService) {}

  @Get('/category/starbuyer')
  async getAllCategoryStarBuyer() {
    try {
      return await this.starBuyerService.getAllCategoryStarBuyer();
    } catch (error) {
      return true;
    }
  }

  @Get('/starbuyer/create/product/list')
  async createProductStarBuyer() {
    try {
      return await this.starBuyerService.createProductStarBuyer();
    } catch (error) {
      return true;
    }
  }

  @Get('/starbuyer/create/product/detail')
  async createProductDetailStarBuyer() {
    try {
      return await this.starBuyerService.createProductDetailStarBuyer();
    } catch (error) {
      return true;
    }
  }

  @Get('/starbuyer/product/list')
  async getListProductStarbuyer(@Query() query: QueryParse) {
    try {
      return await this.starBuyerService.getListProductStarbuyer(query);
    } catch (error) {
      return true;
    }
  }

  @Get('/starbuyer/product/detail/:productNumber')
  async getProductDetailAucnet(@Param('productNumber') productNumber: string) {
    try {
      return await this.starBuyerService.getProductDetailStarbuyer(
        productNumber,
      );
    } catch (error) {
      return true;
    }
  }
}
