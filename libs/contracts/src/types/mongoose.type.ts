import { actualPrimitives, Document, Types } from 'mongoose';

type _LeanDocument<T> = {
  [K in keyof T]: LeanDocumentElement<T[K]>;
};

// Keep this a separate type, to ensure that T is a naked type.
// This way, the conditional type is distributive over union types.
// This is required for PopulatedDoc.
type LeanDocumentElement<T> = T extends unknown[]
  ? LeanArray<T> // Array
  : T extends Document
  ? LeanDocument<T> // Subdocument
  : T;

type LeanArray<T extends unknown[]> = T extends unknown[][]
  ? LeanArray<T[number]>[]
  : LeanType<T[number]>[];

type TreatAsPrimitives =
  | actualPrimitives
  | NativeDate
  | RegExp
  | symbol
  | Error
  | Types.ObjectId;

type LeanType<T> = 0 extends 1 & T
  ? T // any
  : T extends TreatAsPrimitives
  ? T // primitives
  : T extends Types.Subdocument
  ? Omit<LeanDocument<T>, '$isSingleNested' | 'ownerDocument' | 'parent'>
  : LeanDocument<T>; // Documents and everything else

/**
 * Documents returned from queries with the lean option enabled.
 * Plain old JavaScript object documents (POJO).
 * @see https://mongoosejs.com/docs/tutorials/lean.html
 */
export type LeanDocument<T> = Omit<
  _LeanDocument<T>,
  Exclude<keyof Document, '_id' | 'id' | '__v'> | '$isSingleNested'
>;
