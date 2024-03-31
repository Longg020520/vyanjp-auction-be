import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, collection: 'category_aucnet' })
export class CategoryAucnetDocument extends Document {
  @Prop({ required: true, type: Number })
  genreCd: number;

  @Prop({ required: true, type: String })
  genre: string;

  @Prop({ required: true, type: String })
  genreName: string;

  @Prop({ required: true, type: [Object] })
  maker: {
    makerCd: number;
    maker: string;
    count: number;
    countTotal: number;
  }[];

  @Prop({ required: true, type: [Object] })
  brandType: {
    brandTypeCd: number;
    brandType: string;
    count: number;
    countTotal: number;
  }[];

  @Prop({ required: true, type: [Object] })
  shape: {
    keijoCd: number;
    keijo: string;
    count: number;
    countTotal: number;
  }[];
}

export const CategoryAucnetSchema = SchemaFactory.createForClass(
  CategoryAucnetDocument,
);

@Schema({ timestamps: true, collection: 'list_product_aucnet' })
export class ListProductAucnetDocument extends Document {
  @Prop({ required: true, type: String })
  photoUrl: string;

  @Prop({ required: true, type: String })
  uketsukeBng: string;

  @Prop({ required: true, type: Number })
  seriBng: number;

  @Prop({ required: true, type: Number })
  kekkaKbn: number;

  @Prop({ required: true, type: String })
  kekka: string;

  @Prop({ required: true, type: String })
  maker: string;

  @Prop({ required: true, type: String })
  brandType: string;

  @Prop({ required: true, type: String })
  shohin: string;

  @Prop({ required: true, type: String })
  genre: string;

  @Prop({ required: true, type: String })
  keijo: string;

  @Prop({ required: true, type: String })
  hyoka: string;

  @Prop({ required: true, type: String })
  hyokaGaiso: string;

  @Prop({ required: true, type: String })
  hyokaNaiso: string;

  @Prop({ required: true, type: String })
  handling: string;

  @Prop({ required: true, type: Boolean })
  jishaFlg: boolean;

  @Prop({ required: true, type: Number })
  startKng: number;

  @Prop({ required: true, type: Number })
  genzaiKng: number;

  @Prop({ required: true, type: String })
  kaisaiKbn: string;

  @Prop({ required: true, type: String })
  zoomPhotoUrl: string;

  @Prop({ required: true, type: String })
  albumPhotoUrl: string;
}

export const ListProductAucnetSchema = SchemaFactory.createForClass(
  ListProductAucnetDocument,
);

@Schema({ timestamps: true, collection: 'product_aucnet_detail' })
export class ProductAucnetDetailDocument extends Document {
  @Prop({ required: true, type: String })
  kaisaiKaisu: string;

  @Prop({ required: true, type: String })
  kaisaiYmd: string;

  @Prop({ required: true, type: String })
  uketsukeBng: string;

  @Prop({ required: true, type: Number })
  seriBng: number;

  @Prop({ required: true, type: Number })
  kekkaKbn: number;

  @Prop({ required: true, type: Number })
  genreCd: number;

  @Prop({ required: true, type: String })
  genre: string;

  @Prop({ required: true, type: String })
  maker: string;

  @Prop({ required: true, type: String })
  brandType: string;

  @Prop({ required: true, type: String })
  keijo: string;

  @Prop({ required: true, type: String })
  shohin: string;

  @Prop({ required: true, type: String })
  hyoka: string;

  @Prop({ required: true, type: String })
  hyokaGaiso: string;

  @Prop({ required: true, type: String })
  hyokaNaiso: string;

  @Prop({ required: true, type: String })
  handling: string;

  @Prop({ required: true, type: Boolean })
  jishaFlg: boolean;

  @Prop({ required: true, type: Number })
  startKng: number;

  @Prop({ required: true, type: Number })
  genzaiKng: number;

  @Prop({ required: true, type: Number })
  nyusatsuSu: number;

  @Prop({ required: true, type: Boolean })
  topFlg: boolean;

  @Prop({ required: true, type: Boolean })
  nyusatsuFlg: boolean;

  @Prop({ required: true, type: String })
  kaisaiKbn: string;

  @Prop({ required: true, type: [String] })
  photoUrlList: string[];

  @Prop({ required: true, type: [String] })
  adminPhotoUrlList: string[];

  @Prop({ required: true, type: [String] })
  shuppinBiko2List: string[];

  @Prop({ required: true, type: [String] })
  bikoList: string[];

  @Prop({ required: true, type: Number })
  kaijoKbn: number;

  @Prop({ required: true, type: [String] })
  zoomPhotoUrlList: string[];

  @Prop({ required: true, type: [String] })
  adminZoomPhotoUrlList: string[];

  @Prop({ required: true, type: Number })
  seriTypeKbn: number;

  @Prop({ required: true, type: String })
  corner: string;

  @Prop({ required: true, type: String })
  seriEndHm: string;

  @Prop({ required: true, type: String })
  nesageFlg: string;
}

export const ProductAucnetDetailSchema = SchemaFactory.createForClass(
  ProductAucnetDetailDocument,
);
