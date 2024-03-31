import { QUERY_MAPPING } from './constants/client-query.constant';
import {
  ModelQuery,
  ClientQueryOptions,
  ParseQueryResult,
  PaginationResult,
  QueryAggregate,
} from './types';
import { LIMIT_DEFAULT, OFFSET_DEFAULT } from './constants';
import { Model, PipelineStage } from 'mongoose';
import { QueryParse } from '@app/contracts';

export class ClientQuery<T> {
  public model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  /**
   * Lấy danh sách bản ghi theo `query`. Hàm này giống hàm `find` trong `mongoose`
   */
  async find(query?: ModelQuery<T>) {
    const results = await this.model.find(query);
    return results;
  }

  /**
   * Trả về 1 bản ghi duy nhất thoả mãn điều kiện. Giống hàm `findOne` trong `mongoose`
   */
  async findOne(query?: ModelQuery<T>) {
    const results = await this.model.findOne(query);
    return results;
  }

  /**
   * Lấy danh sách bản ghi theo query của `client` gửi lên
   * @param query
   * @param options
   */
  async findForQuery(query: QueryParse, options?: ClientQueryOptions<T>) {
    const { populate, queryMongoose } = options || {};
    const { filter, limit, offset, sort, count, justOne } = this.parseQuery(
      query || {},
    );

    //- Lọc dữ liệu theo query và lấy phân trang
    const omit = options?.omit || [];
    const mongoFilter = queryMongoose
      ? { ...filter, ...queryMongoose }
      : filter;
    const pagination = await this.getPagination(mongoFilter, limit);

    //- Nếu có options count bằng true sẽ trả về cả tổng số bản ghi
    if (count) {
      const totalRows = await this.model.count(mongoFilter);
      return totalRows;
    }

    //- Tạo câu query database theo query client
    const results: T[] = await this.model
      .find(mongoFilter)
      .skip(offset)
      .limit(limit)
      .sort(sort)
      .populate(populate)
      .lean();

    //- Nếu justOne bằng true sẽ trả về 1 bản ghi duy nhất
    //- Cần tối ưu lại query để chỉ lấy 1 bản ghi
    if (justOne) {
      return results[0];
    }

    //- Trả về kết quả query và phân trang
    return {
      records: omit.length ? this.omit(results, omit) : results,
      pagination: pagination,
    };
  }

  /**
   * Lấy danh sách bản ghi theo query của `client` gửi lên
   * @param query - query được gửi lên từ phía client
   * @param options - các tùy chọn để thực hiện query aggregate
   * @returns {Promise} - Promise trả về một object gồm hits và pagination
   */
  async queryAggregate(query: QueryParse, options?: QueryAggregate) {
    // Parse và chuẩn hóa query
    const { filter, limit, offset, sort } = this.parseQuery(query || {});
    const { aggregate, queryFilter } = options || {};

    //- Lọc dữ liệu theo query và lấy phân trang
    const pagination = await this.getPagination(filter, limit);

    // Tạo pipeline stages
    const match: PipelineStage[] = [
      { $match: { ...filter, ...queryFilter } },
      ...aggregate,
    ];

    // Nếu có thì sắp xếp kết quả
    if (Object.keys(sort).length != 0) match.push({ $sort: sort });

    //- Tạo câu query database theo query client
    const data = await this.model.aggregate([
      ...match,
      { $skip: limit * offset },
      { $limit: limit },
    ]);

    return {
      hits: data, // kết quả trả về
      pagination, // thông tin về phân trang
    };
  }

  /**
   * Chuyển query của client sang dạng query của mongoose
   * @param query
   * @returns
   */
  public parseQuery(query: QueryParse): ParseQueryResult<T> {
    // Lấy ra giá trị của limit và offset từ query, nếu không có thì sử dụng giá trị mặc định
    const {
      limit = LIMIT_DEFAULT,
      offset = OFFSET_DEFAULT,
      count = false,
      justOne = false,
      ...queryWithoutLimitOffset
    } = query;

    const filter = {};
    const sort = {};

    // Duyệt qua từng cặp key-value của query và chuyển đổi sang dạng query của mongoose
    Object.entries(queryWithoutLimitOffset).forEach(([key, value]) => {
      // Nếu value không phải là object thì bỏ qua
      if (typeof value !== 'object') return;

      QUERY_MAPPING.forEach(({ key: mappingKey, value: mappingValue }) => {
        // Nếu value có key 'sort' thì chuyển đổi sang sort operator của mongoose
        if (value['sort'] === mappingKey) sort[key] = mappingValue;
        // Nếu value có key tương ứng với mappingKey thì chuyển đổi sang operator của mongoose
        if (value[mappingKey]) {
          filter[key] = {
            ...filter[key],
            [mappingValue]: value[mappingKey],
          };
        }
      });
    });

    const orFilters = Object.entries(filter).reduce((acc, [key, value]) => {
      // Nếu value có $or thì chuyển đổi sang $or operator của mongoose
      if (value['$or']) {
        acc.push({ [key]: value['$or'] });
        delete filter[key];
      }

      // Nếu value có $regex thì chuyển đổi sang $regex operator của mongoose và thêm option 'i' để không phân biệt chữ hoa, chữ thường
      if (value && value['$regex']) {
        filter[key] = { $regex: value['$regex'], $options: 'i' };
      }

      return acc;
    }, []);

    // Nếu có orFilters thì thêm orFilters vào filter với $or operator của mongoose
    if (orFilters.length) filter['$or'] = orFilters;

    // Trả về kết quả parse query
    return {
      filter,
      limit,
      offset,
      sort,
      count,
      justOne,
    };
  }

  /**
   * Hỗ trợ xoá các key trong mảng object
   * @param value
   * @param keys
   * @returns
   */
  public omit(value: T[], keys: string[]) {
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

  // Lấy phân trang
  async getPagination(
    filter: ModelQuery<T>,
    limit: number,
  ): Promise<PaginationResult> {
    const count = await this.model.count(filter);
    const pagination = {
      totalRows: count,
      totalPages: Math.ceil(count / limit),
    };
    return pagination;
  }
}
