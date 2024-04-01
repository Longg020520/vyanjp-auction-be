import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, collection: 'category_starbuyer' })
export class CategoryStarBuyerDocument extends Document {
  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  categoryName: string;

  @Prop({ required: true })
  rank: Array<{
    rankCode: string;
    rankDescription: string;
  }>;
}

export const CategoryStarBuyerSchema = SchemaFactory.createForClass(
  CategoryStarBuyerDocument,
);

@Schema({ timestamps: true, collection: 'list_product_starbuyer' })
export class ListProductStarBuyerDocument extends Document {
  @Prop({ required: true })
  productName: string;

  @Prop({ required: true })
  productImage: string;

  @Prop({ required: true })
  productPrice: string;

  @Prop({ required: true })
  productNumber: string;

  @Prop({ required: true })
  productDate: string;

  @Prop({ required: true })
  productRank: string;

  @Prop({ required: true })
  category: string;
}

export const ListProductStarBuyerSchema = SchemaFactory.createForClass(
  ListProductStarBuyerDocument,
);

@Schema({ timestamps: true, collection: 'product_starbuyer_detail' })
export class ProductStarBuyerDetailDocument extends Document {
  @Prop({ required: true })
  productName: string;

  @Prop({ required: true })
  productRank: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  productImage: string;

  @Prop({ required: true })
  images: Array<string>;

  @Prop({ required: true })
  productPrice: string;

  @Prop({ required: true })
  productDate: string;

  @Prop({ required: true })
  productNumber: string;

  @Prop({ required: true, type: Object })
  properties: {
    MainCategory: string;
    Mediumcategory: string;
    Category: string;
    Brand: string;
    Linename: string;
    Modelname: string;
    Modelnumber: string;
    Materials: string;
    Shape: string;
    Color: string;
    Metalfittings: string;
    Serial: string;
    Serialsticker: string;
    Accessories: string;
    purchasedate: string;
    ALLUexhibiting: string;
    SizeW: string;
    SizeH: string;
    SizeD: string;
    Shoulderheight: string;
    Handleheight: string;
    Freetext: string;
    External: string;
    Internal: string;
    Handle: string;
    Angular: string;
    Root: string;
    Metal: string;
    Othercondition1: string;
    Othercondition2: string;
    Notes: string;
  };
}

export const ProductStarBuyerDetailSchema = SchemaFactory.createForClass(
  ProductStarBuyerDetailDocument,
);
