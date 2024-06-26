import { QueryParse } from '@scmt/types';
import {
  PopulateOptions,
  FilterQuery,
  UpdateQuery,
  AnyObject,
  PipelineStage,
} from 'mongoose';

export type ClientQueryOptions<T> = {
  populate?: PopulateOptions | Array<PopulateOptions>;
  omit?: string[];
  queryMongoose?: FilterQuery<T>;
};

export type ModelQuery<T> = AnyObject & UpdateQuery<T>;

export type QueryAggregate = {
  aggregate?: PipelineStage[];
  queryFilter?: QueryParse;
};

export type ParseQueryResult<T> = {
  filter: FilterQuery<T>;
  limit: number;
  offset: number;
  sort: string | any;
  count: boolean;
  justOne: boolean;
};

export type PaginationResult = {
  totalRows: number;
  totalPages: number;
};
