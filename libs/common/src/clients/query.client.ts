import { LIMIT, OFFSET, QUERY_OPERATORS } from './constants/query.constant';
import {
  ModelQuery,
  PaginationResult,
  ParseQueryResult,
} from './types/query.type';
import { QueryParse } from '@app/contracts';
import { FilterQuery, Model, PopulateOptions } from 'mongoose';

interface Builder<T> {
  model(model: Model<T>): ClientQuery<T>;
  query(query: QueryParse): ClientQuery<T>;
  mongoose(query: FilterQuery<T>): ClientQuery<T>;
  omit(fields: string[]): ClientQuery<T>;
  populate(populate: PopulateOptions | Array<PopulateOptions>): ClientQuery<T>;
  build(): Promise<{ records: T[]; pagination: PaginationResult }>;
  notFields(notFields: string[]): ClientQuery<T>;
}

export class ClientQuery<T> implements Builder<T> {
  protected _model: Model<T>;
  protected _query: QueryParse;
  protected _mongoose: FilterQuery<T>;
  protected _omit: string[];
  protected _populate: PopulateOptions | Array<PopulateOptions>;
  protected _notFields: string[];

  constructor(model?: Model<T>) {
    this._model = model;
  }

  /**
   * Thực hiện query trên model nào? Có thể gửi vào lúc khởi tạo class
   * @param model
   * @returns
   */
  public model(model: Model<T>): ClientQuery<T> {
    this._model = model;
    return this;
  }

  /**
   * Query của client gửi lên server
   * @param query
   * @returns
   */
  public query(query: QueryParse): ClientQuery<T> {
    this._query = query;
    return this;
  }

  /**
   * Query mongoose (ưu tiên và ghi đè query từ client)
   * @param query
   * @returns
   */
  public mongoose(query: FilterQuery<T>): ClientQuery<T> {
    this._mongoose = query;
    return this;
  }

  /**
   * Thực hiện xóa các trường theo yêu cầu khi trả về data cho client
   * @param fields
   * @returns
   */
  public omit(fields: string[]): ClientQuery<T> {
    this._omit = fields;
    return this;
  }

  /**
   * Trường hợp cần lookup để lấy thêm dữ liệu
   * @param populate
   */
  public populate(
    populate: PopulateOptions | PopulateOptions[],
  ): ClientQuery<T> {
    this._populate = populate;
    return this;
  }

  /**
   * Hàm này sẽ dùng để chặn các trường không cho filter
   * @param notFields
   * @returns
   */
  public notFields(notFields: string[]): ClientQuery<T> {
    this._notFields = notFields;
    return this;
  }

  async __getPagination(
    filter: ModelQuery<T>,
    limit: number,
  ): Promise<PaginationResult> {
    const count = await this._model.count(filter);
    const pagination = {
      totalRows: count,
      totalPages: Math.ceil(count / limit),
    };

    return pagination;
  }

  private __omit(value: T[], keys: string[]) {
    if (!value || !Array.isArray(value)) return value;

    const omit = (value: T, key: string[]) => {
      const clone = value;
      const keys = Object.keys(clone);

      //- Delete key on key input
      for (let k = 0; k <= key.length; k++) {
        for (let e = 0; e <= keys.length; e++) {
          if (keys[e] == key[k]) {
            delete clone[keys[e]];
          }
        }
      }
      return clone;
    };

    const result = [];
    value.map((element) => result.push(omit(element, keys)));

    return result as T[];
  }

  private __parseQuery(query: QueryParse): ParseQueryResult<T> {
    const limit = Number(query.limit) || LIMIT;
    const offset = Number(query.offset) || OFFSET;

    //- Xoá 2 key limit và offset ra khỏi query nếu có
    delete query['limit'];
    delete query['offset'];

    const keys = Object.keys(query);
    const config = QUERY_OPERATORS;
    const filter = {};
    const sort = {};

    //- Chuyển query sang dạng query của mongoose
    //- Lặp qua các giá trị query filter
    keys.forEach((key) => {
      const value = query[key];
      config.forEach((element) => {
        if (typeof value != 'object') return;
        if (value['sort'] == element.key) sort[key] = element.value;
        if (value[element.key]) {
          filter[key] = filter[key]
            ? {
                ...filter[key],
                [element.value]: value[element.key],
              }
            : {
                [element.value]: value[element.key],
              };
        }
      });
    });

    //- Chuyển query or sang dạng mongoose
    const or = [];

    Object.keys(filter).map((o) => {
      if (filter[o]['$or']) {
        or.push({ [o]: Number(filter[o]['$or']) || filter[o]['$or'] });
        delete filter[o];
      }
    });
    if (or && or.length) filter['$or'] = or;

    return {
      filter: filter,
      limit: limit,
      offset: offset,
      sort: sort,
    };
  }

  /**
   * Trả về response theo trạng thái query
   */
  public async build(): Promise<{
    records: T[];
    pagination: PaginationResult;
  }> {
    const mongoose = this._mongoose;
    const populate = this._populate;
    const { filter, offset, sort, limit } = this.__parseQuery(
      this._query || {},
    );

    //- Lọc dữ liệu theo query và lấy phân trang
    const pageLimit = Math.min(
      limit,
      Number(process.env.PAGINATION_LIMIT || limit),
    );
    const omit = this._omit || [];
    const mongoFilter = mongoose ? { ...filter, ...mongoose } : filter;
    const pagination = await this.__getPagination(mongoFilter, limit);

    //- Tạo câu query database theo query client
    const results: T[] = await this._model
      .find(mongoFilter)
      .skip(offset)
      .limit(pageLimit)
      .sort(sort)
      .populate(populate)
      .lean();

    const records = omit.length ? this.__omit(results, omit) : results;
    return { records, pagination };
  }
}
