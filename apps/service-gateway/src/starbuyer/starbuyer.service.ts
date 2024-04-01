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
    const dataCreate = [
      {
        productName:
          'Tiffany Grand YG & leather QZ Silver-Face No Extra Link with spring bars Damaged back cover screw',
        productRank: 'B',
        location: 'Japan',
        productImage:
          'https://images.starbuyers-global-auction.com/items/6238703/A2391421.JPG',
        images: [
          'https://images.starbuyers-global-auction.com/items/6238703/A2391421.JPG',
          'https://images.starbuyers-global-auction.com/items/6238703/A2391421-1.JPG',
          'https://images.starbuyers-global-auction.com/items/6238703/A2391421-2.JPG',
          'https://images.starbuyers-global-auction.com/items/6238703/A2391421-3.JPG',
          'https://images.starbuyers-global-auction.com/items/6238703/A2391421-4.JPG',
          'https://images.starbuyers-global-auction.com/items/6238703/A2391421-5.JPG',
          'https://images.starbuyers-global-auction.com/items/6238703/A2391421-6.JPG',
          'https://images.starbuyers-global-auction.com/items/6238703/A2391421-7.JPG',
          'https://images.starbuyers-global-auction.com/items/6238703/A2391421-8.JPG',
          'https://images.starbuyers-global-auction.com/items/6238703/A2391421-9.JPG',
        ],
        productPrice: '244,200',
        productDate: '2024/04/15 23:59 JST',
        productNumber: '1499327',
        properties: {
          MainCategory: 'Watch',
          Mediumcategory: 'Watches',
          Category: '',
          Brand: 'Tiffany',
          Linename: '',
          Modelname: 'Grand',
          Modelnumber: '',
          Serial: '',
          Materials: 'YG & leather',
          Movement: 'QZ',
          Dialcolor: 'Silver',
          Dialindex: 'Arabic index',
          Dialtype: '',
          Extralinks: 'None',
          Initials: '',
          Accessories: '',
          purchasedate: '',
          ALLUexhibiting: 'Allow',
          ProductID: '1499327',
          'Casesizelength(mm)': '29',
          'Casesizewidth(mm)': '23',
          Beltarms: '17.2',
          'Amplitude(DialUp)': '',
          'Amplitude(DialDown)': '',
          'Amplitude(Crowndown)': '',
          'Export-ProhibitedParts': 'Included',
          Freetext: '',
          Case: 'B',
          'Belt&buckle': 'AB',
          Windshield: '-',
          Othercondition1: 'Deterioration on hands, Dial stains',
          Othercondition2: '-',
          Beltsag: '',
          Malfunction1: '',
          Malfunction2: '',
          Missing: '',
          Notes: 'with spring bars Damaged back cover screw',
        },
      },
      {
        productName:
          'Rolex GMT Master 1675 1389536 SS AT Black-Face No Extra Link',
        productRank: 'B',
        location: 'Japan',
        productImage:
          'https://images.starbuyers-global-auction.com/items/5657290/A1937065.JPG',
        images: [
          'https://images.starbuyers-global-auction.com/items/5657290/A1937065.JPG',
          'https://images.starbuyers-global-auction.com/items/5657290/A1937065-1.JPG',
          'https://images.starbuyers-global-auction.com/items/5657290/A1937065-2.JPG',
          'https://images.starbuyers-global-auction.com/items/5657290/A1937065-3.JPG',
          'https://images.starbuyers-global-auction.com/items/5657290/A1937065-4.JPG',
          'https://images.starbuyers-global-auction.com/items/5657290/A1937065-5.JPG',
          'https://images.starbuyers-global-auction.com/items/5657290/A1937065-6.JPG',
          'https://images.starbuyers-global-auction.com/items/5657290/A1937065-7.JPG',
          'https://images.starbuyers-global-auction.com/items/5657290/A1937065-8.JPG',
          'https://images.starbuyers-global-auction.com/items/5657290/A1937065-9.JPG',
          'https://images.starbuyers-global-auction.com/items/5657290/A1937065-10.JPG',
        ],
        productPrice: '1,816,100',
        productDate: '2024/04/15 23:59 JST',
        productNumber: '1499324',
        properties: {
          MainCategory: 'Watch',
          Mediumcategory: 'Watches',
          Category: '',
          Brand: 'Rolex',
          Linename: '',
          Modelname: 'GMT Master',
          Modelnumber: '1675',
          Serial: '1389536',
          Materials: 'SS',
          Movement: 'AT',
          Dialcolor: 'Black',
          Dialindex: 'Dot/point index',
          Dialtype: '',
          Extralinks: 'None',
          Initials: '',
          Accessories: 'box Guarantee',
          purchasedate: '',
          ALLUexhibiting: 'Allow',
          ProductID: '1499324',
          'Casesizelength(mm)': '40',
          'Casesizewidth(mm)': '40',
          Beltarms: '17.5',
          'Amplitude(DialUp)': '',
          'Amplitude(DialDown)': '',
          'Amplitude(Crowndown)': '',
          'Export-ProhibitedParts': 'Not included',
          Freetext: '',
          Case: 'B',
          'Belt&buckle': 'Case only',
          Windshield: 'Scratched',
          Othercondition1: 'None',
          Othercondition2: '-',
          Beltsag: '',
          Malfunction1: '',
          Malfunction2: '',
          Missing: '',
          Notes: '',
        },
      },
    ];
    const data = await this.productStarBuyerDetailModdel.insertMany(dataCreate);
    return data;
  }

  async getListProductStarbuyer(query: QueryParse) {
    const data = await new ClientQuery(this.listProductStarBuyerModel)
      .query(query)
      .build();
    return data;
  }

  async getProductDetailStarbuyer(productNumber: string) {
    const data = await this.productStarBuyerDetailModdel.findOne({
      productNumber,
    });
    return data;
  }
}
