import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import {
  CategoryAucnetDocument,
  ListProductAucnetDocument,
  ProductAucnetDetailDocument,
} from './schemas/aucnet.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QueryParse } from '@app/contracts';
import { ClientQuery } from '@app/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Cron, CronExpression } from '@nestjs/schedule';
// import { Model } from 'mongoose';
// import { firstValueFrom } from 'rxjs';
// import { NotifyDocument } from './schemas/notifi.schemas';
// import { SlackMessageType } from './types/slack-notify.type';
// import * as moment from 'moment';

const listGenreCd = {
  Bag: 1,
  Watch: 2,
  'Precious metal': 3,
  Clothing: 4,
  Accessories: 5,
  Tableware: 6,
  Variety: 7,
  Coin: 9,
};

const headers = {
  accept: 'application/json, text/plain, */*',
  'accept-language': 'en',
  'cache-control': 'no-cache',
  expires: '0',
  pragma: 'no-cache',
  'sec-ch-ua':
    '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"macOS"',
  'sec-fetch-dest': 'empty',
  'sec-fetch-mode': 'cors',
  'sec-fetch-site': 'same-origin',
  cookie:
    'SL_G_WPT_TO=en; SL_GWPT_Show_Hide_tmp=1; SL_wptGlobTipTmp=1; brand_language=en; wsendpoint=https://bid.api.brand-auc.com:443/api/v1/brand-bid/ws; kaiin_bng_hash=5c410e7a9572dee7c723bb76764651cdf6b52ca3f304aa45163c14c50595006d; XSRF-TOKEN=2041bb0b-225a-498a-a9dc-3d0587a99e92; SESSION=OWY0MzM3NDYtMzUxOC00YjE0LWE5ZjItMjY2OTAwYWExYzg5; ws_sid=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJLMDI0NzUyIiwic2NvcGUiOlsiYWNwIl0sIktPQlVUU1VfQVVUSF9LRVkiOiIiLCJleHAiOjE3MTEzMDMxODUsIkVOVl9LRVkiOiIiLCJhdXRob3JpdGllcyI6WyJBVVRIX1BSRU1JVU0iLCJBVVRIX1NPVUJBIiwiUk9MRV9QUkVfVVNFUiIsIkFVVEhfTllVU0FUU1UiLCJST0xFX0pQX1VTRVIiXSwianRpIjoiODNhNTVmYTYtM2YwYS00NTUyLThhODMtMGI0N2M4Yzc0MTc0IiwiY2xpZW50X2lkIjoiYnJhbmRWcGFNZW1iZXIifQ.MXWGMa07Jt4frxBs06pLnQJOKkaOvNa1uFtrapr0RInbir_mdaldCusqA_sPzXjOZcNdAtAsvHD4N-vTJtOK6q2XcVWtFeOjFHBoD7sAjkw2vUsEkykcRqKt5A9_92FEkIq8CavqUtqYfpOx5Ii2GliG03yA6CFyvYoToT2o6h40HGQXcHWrtV3WewHksHjBL4KOJ-7EApW0oCge9H-EVUGqx20IPTWzFL_k5ZKVBud0dDQk7ToTtnUf4Nr-QPlQA4wJb4dj3KWAsUdkpvG9sCISHX8bbVZYg6MKxR2bll087RPWK2_ITO7JQ2lf5Z7u3EJtR6Czu5A9dN-6OtO1rg',
  Referer: 'https://bid.brand-auc.com/items',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
};

@Injectable()
export class AucnetService {
  constructor(
    @InjectModel(CategoryAucnetDocument.name)
    private readonly categoryAucnetModel: Model<CategoryAucnetDocument>,

    @InjectModel(ListProductAucnetDocument.name)
    private readonly listProductAucnetModel: Model<ListProductAucnetDocument>,

    @InjectModel(ProductAucnetDetailDocument.name)
    private readonly productAucnetDetailModel: Model<ProductAucnetDetailDocument>,

    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async getAllCategoryAucnet(query: QueryParse) {
    const data = await new ClientQuery(this.categoryAucnetModel)
      .query(query)
      .build();
    return data;
  }

  async getListProductAucnet(query: QueryParse) {
    const data = await new ClientQuery(this.listProductAucnetModel)
      .query(query)
      .build();
    return data;
  }

  async getProductDetailAucnet(uketsukeBng: string) {
    const data = await this.productAucnetDetailModel.findOne({
      uketsukeBng,
    });
    console.log(data, 'data22222');
    return data;
  }

  async tets() {
    const size = 1;
    const pageNumber = 0;
    const genreCdList = 9;

    const url = `https://bid.brand-auc.com/api/v1/brand-bid/items/list?sort=&pageNumber=${pageNumber}&page=${pageNumber}&size=${size}&freeWordText=&kata=&genzaiKngFrom=&genzaiKngTo=&startKngFrom=&startKngTo=&genreCdList=${genreCdList}&makerCdList=&brandTypeCdList=&keijoCdList=&handlingKbnList=0&kaijoKbn=&cornerNumList=&status=1&nesageFlg=&saishuppinTypeKbnList=&sysColor=&hoshoKbn=&sozai=&torisetsu=&hako=&caratFrom=&caratTo=&colorCd=&cutCd=&clarityCd=&keikoCd=&kanteiShubetsu=&jiganeSozai=&souJuryoFrom=&souJuryoTo=`;

    const data = await firstValueFrom(
      this.httpService.get(url, {
        headers,
      }),
    );

    const dataInsert = data.data.content.map((item) => {
      return {
        photoUrl: item.photoUrl,
        uketsukeBng: item.uketsukeBng,
        seriBng: item.seriBng,
        kekkaKbn: item.kekkaKbn,
        kekka: item.kekka,
        maker: item.maker,
        brandType: item.brandType,
        shohin: item.shohin,
        genre: item.genre,
        keijo: item.keijo,
        hyoka: item.hyoka,
        hyokaGaiso: item.hyokaGaiso,
        hyokaNaiso: item.hyokaNaiso,
        handling: item.handling,
        jishaFlg: item.jishaFlg,
        startKng: item.startKng,
        genzaiKng: item.genzaiKng || 0,
        kaisaiKbn: item.kaisaiKbn,
        zoomPhotoUrl: item.zoomPhotoUrl,
        albumPhotoUrl: item.albumPhotoUrl,
      };
    });

    // await this.listProductAucnetModel.insertMany(dataInsert);

    console.log(data.data, 'res11111');

    return {
      message: 'success',
    };

    // return await this.categoryAucnetModel.find({});
  }
  async createManyProduct() {
    const data = await this.listProductAucnetModel
      .find({})
      .limit(14000)
      .skip(3051);
    // console.log(data, 'data');

    // const dataCreate = [];

    for (let index = 0; index < data.length; index++) {
      await this.createProduct(
        data[index].uketsukeBng,
        listGenreCd[`${data[index].genre}`],
      );
      console.log(index + 3051, 'index + 2018');
      // dataCreate.push(item);
    }

    // await this.productAucnetDetailModel.insertMany(dataCreate);

    return {
      message: 'success',
    };
  }

  async createProduct(uketsukeBng: string, genreCdList: number) {
    // const uketsukeBng = '692-28957';
    // const genreCdList = 1;
    const url = `https://bid.brand-auc.com/api/v1/brand-bid/items/detail?sort=&pageNumber=0&page=0&size=1&kata=&nesageFlg=&saishuppinTypeKbnList=&favoriteAFlg=false&favoriteBFlg=false&genreCdList=${genreCdList}&makerCdList=&brandTypeCdList=&keijoCdList=&shohinList=&hyokaList=&hyokaGaisoList=&hyokaNaisoList=&seriBngList=&handlingKbnList=&kekkaKngFrom=&kekkaKngTo=&uketsukeBngFrom=&uketsukeBngTo=&kekkaKbnList=&uritsukushiFlgList=&iconList=&prevKbn=1&kaijoKbn=&cornerNumList=&status=1&seriEndHmList=&sysColor=&hoshoKbn=&sozai=&torisetsu=&hako=&caratFrom=&caratTo=&colorCd=&cutCd=&clarityCd=&keikoCd=&kanteiShubetsu=&jiganeSozai=&souJuryoFrom=&souJuryoTo=&uketsukeBng=${uketsukeBng}`;

    const data = await firstValueFrom(
      this.httpService.get(url, {
        headers,
      }),
    );

    const dataCreate = {
      kaisaiKaisu: data.data.content[0].kaisaiKaisu,
      kaisaiYmd: data.data.content[0].kaisaiYmd,
      uketsukeBng: data.data.content[0].uketsukeBng,
      seriBng: data.data.content[0].seriBng,
      kekkaKbn: data.data.content[0].kekkaKbn,
      genreCd: data.data.content[0].genreCd,
      genre: data.data.content[0].genre,
      maker: data.data.content[0].maker,
      brandType: data.data.content[0].brandType,
      keijo: data.data.content[0].keijo,
      shohin: data.data.content[0].shohin,
      hyoka: data.data.content[0].hyoka,
      hyokaGaiso: data.data.content[0].hyokaGaiso,
      hyokaNaiso: data.data.content[0].hyokaNaiso,
      handling: data.data.content[0].handling,
      jishaFlg: data.data.content[0].jishaFlg,
      startKng: data.data.content[0].startKng,
      genzaiKng: data.data.content[0].genzaiKng || 0,
      nyusatsuSu: data.data.content[0].nyusatsuSu,
      topFlg: data.data.content[0].topFlg,
      nyusatsuFlg: data.data.content[0].nyusatsuFlg,
      kaisaiKbn: data.data.content[0].kaisaiKbn,
      photoUrlList: data.data.content[0].photoUrlList,
      adminPhotoUrlList: data.data.content[0].adminPhotoUrlList,
      shuppinBiko2List: data.data.content[0].shuppinBiko2List,
      bikoList: data.data.content[0].bikoList,
      kaijoKbn: data.data.content[0].kaijoKbn,
      zoomPhotoUrlList: data.data.content[0].zoomPhotoUrlList,
      adminZoomPhotoUrlList: data.data.content[0].adminZoomPhotoUrlList,
      seriTypeKbn: data.data.content[0].seriTypeKbn,
      corner: data.data.content[0].corner,
      seriEndHm: data.data.content[0].seriEndHm,
      nesageFlg: data.data.content[0].nesageFlg,
    };

    // console.log(dataCreate, 'dataCreate');

    await this.productAucnetDetailModel.create(dataCreate);

    // return dataCreate;
  }
}

// {
//   "kaisaiKaisu": 760,
//   "kaisaiYmd": "2024/03/25",
//   "uketsukeBng": "756-17733",
//   "seriBng": 40143,
//   "kekkaKbn": 2,
//   "genreCd": 2,
//   "genre": "Watch",
//   "maker": "SEIKO",
//   "brandType": "Others Line Watch",
//   "keijo": "Mens",
//   "shohin": "Lord Marvel 5770-1990",
//   "hyoka": "C",
//   "hyokaGaiso": "2",
//   "hyokaNaiso": "-",
//   "handling": "Other",
//   "jishaFlg": false,
//   "startKng": 0,
//   "genzaiKng": 1500,
//   "nyusatsuSu": 2,
//   "topFlg": false,
//   "nyusatsuFlg": false,
//   "kaisaiKbn": "2",
//   "photoUrlList": [
//       "https://image.brand-auc.com/brand_img/0/SP/760/177/J760_756-17733_01L.jpg?20240319144437",
//       "https://image.brand-auc.com/brand_img/0/SP/760/177/J760_756-17733_02L.jpg?20240319144437",
//       "https://image.brand-auc.com/brand_img/0/SP/760/177/J760_756-17733_03L.jpg?20240319144437",
//       "https://image.brand-auc.com/brand_img/0/SP/760/177/J760_756-17733_04L.jpg?20240319144437",
//       "https://image.brand-auc.com/brand_img/0/SP/760/177/J760_756-17733_05L.jpg?20240319144437",
//       "https://image.brand-auc.com/brand_img/0/SP/760/177/J760_756-17733_06L.jpg?20240319144437"
//   ],
//   "adminPhotoUrlList": [
//       "https://image.brand-auc.com/brand_img/0/SP/760/177/S760_756-17733_01L.jpg?20240319144437",
//       "https://image.brand-auc.com/brand_img/0/SP/760/177/S760_756-17733_02L.jpg?20240319144437",
//       "https://image.brand-auc.com/brand_img/0/SP/760/177/S760_756-17733_03L.jpg?20240319144437",
//       "https://image.brand-auc.com/brand_img/0/SP/760/177/S760_756-17733_04L.jpg?20240319144437",
//       "https://image.brand-auc.com/brand_img/0/SP/760/177/S760_756-17733_05L.jpg?20240319144437",
//       "https://image.brand-auc.com/brand_img/0/SP/760/177/S760_756-17733_06L.jpg?20240319144437",
//       "https://image.brand-auc.com/brand_img/0/SP/760/177/S760_756-17733_12L.jpg?20240319144437"
//   ],
//   "shuppinBiko2List": [
//       "Time adjustment OK",
//       "Case width (Approx.) 3 6 mm",
//       "Bracelet length (Approx.) 1 7 cm",
//       "Daily rate: + 2 6 - + 3 5 Seconds",
//       "1 . 8 ms",
//       "Aftermarket band",
//       "",
//       ""
//   ],
//   "bikoList": [
//       "Crystal Scratch & Scuffed (M)",
//       "Crystal Crack (M)",
//       "Crystal inside Corroded (M)",
//       "All over Scratch & Plating peeling (M)",
//       "band Corroded (S)",
//       "",
//       "",
//       "",
//       "",
//       "mens"
//   ],
//   "kaijoKbn": 1,
//   "zoomPhotoUrlList": [
//       "https://image.brand-auc.com/brand_img/9/SP/760/177/J760_756-17733_01L.jpg?20240319144437",
//       "https://image.brand-auc.com/brand_img/9/SP/760/177/J760_756-17733_02L.jpg?20240319144437",
//       "https://image.brand-auc.com/brand_img/9/SP/760/177/J760_756-17733_03L.jpg?20240319144437",
//       "https://image.brand-auc.com/brand_img/9/SP/760/177/J760_756-17733_04L.jpg?20240319144437",
//       "https://image.brand-auc.com/brand_img/9/SP/760/177/J760_756-17733_05L.jpg?20240319144437",
//       "https://image.brand-auc.com/brand_img/9/SP/760/177/J760_756-17733_06L.jpg?20240319144437"
//   ],
//   "adminZoomPhotoUrlList": [
//       "https://image.brand-auc.com/brand_img/9/SP/760/177/S760_756-17733_01L.jpg?20240319144437",
//       "https://image.brand-auc.com/brand_img/9/SP/760/177/S760_756-17733_02L.jpg?20240319144437",
//       "https://image.brand-auc.com/brand_img/9/SP/760/177/S760_756-17733_03L.jpg?20240319144437",
//       "https://image.brand-auc.com/brand_img/9/SP/760/177/S760_756-17733_04L.jpg?20240319144437",
//       "https://image.brand-auc.com/brand_img/9/SP/760/177/S760_756-17733_05L.jpg?20240319144437",
//       "https://image.brand-auc.com/brand_img/9/SP/760/177/S760_756-17733_06L.jpg?20240319144437",
//       "https://image.brand-auc.com/brand_img/9/SP/760/177/S760_756-17733_12L.jpg?20240319144437"
//   ],
//   "seriTypeKbn": 1,
//   "corner": "Ｖ①",
//   "seriEndHm": "3/25 17:00",
//   "nesageFlg": "N"
// }
