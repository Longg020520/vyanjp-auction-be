import { Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { ParsedQs } from '../interfaces';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class QueryHelperService {
  private logger = new Logger(this.constructor.name);

  async query<T>(
    model: Model<T>,
    query: ParsedQs,
    lookupStages: { [key: string]: any }[] = [],
  ) {
    // const inputQueryRaw = `agencyCode=$in:A009,A001&type=$eq:Deposit&limit=3&$page=0&$sort=createdAt:-1`
    // const inputQuery = {
    //   "agencyCode": "$in:A009,A001",
    //   "type": "$eq:Deposit",
    //   "$limit": 5,
    //   "$page": 1,
    //   "$sort": "createdAt:-1"
    // }
    this.logger.log('query', query);

    const { limit, page, pipeline, totalDocumentsPipeline, AggField } =
      this.queryObjectToPipeline(query);
    const totalDocuments = (await model.aggregate(totalDocumentsPipeline))
      .length;
    const result = await model.aggregate([...pipeline, ...lookupStages]);

    // chỉnh sửa kết quả nếu như có aggregate
    if (AggField) {
      result.forEach((row: any) => {
        row[AggField] = row[AggField] + ` (${row.count})`;
      });
    }

    return {
      data: result,
      meta: {
        totalDocuments: totalDocuments,
        documentsPerPage: limit,
        currentPage: page + 1,
        totalPages: Math.ceil(totalDocuments / limit),
      },
    };
  }

  queryObjectToPipeline(query: ParsedQs) {
    const inputQuery = { ...query };

    const pipeline = [];

    const [dateField, timezone] = (<string>(inputQuery.$groupDate || '')).split(
      ':',
    );
    // kiểm tra xem cần thêm trường ảo month, day hay không
    if (dateField && dateField.length > 0) {
      pipeline.push({
        $addFields: {
          month: {
            $dateToString: {
              format: '%Y-%m',
              date: `$${dateField}`,
              timezone: timezone || '+0700',
            },
          },
          day: {
            $dateToString: {
              format: '%Y-%m-%d',
              date: `$${dateField}`,
              timezone: timezone || '+0700',
            },
          },
        },
      });
    }

    // chuẩn hoá $filter
    const match = {};
    Object.keys(inputQuery)
      .filter((key) => !key.startsWith('$'))
      .forEach((key) => {
        // query field
        const fieldName = key;

        let op = '$eq';
        let inputType = 'string';
        let value = inputQuery[key] || '';

        if ((inputQuery[key] + '').indexOf(':') >= 0) {
          const [_op, _value, _inputType] = (<string>(
            (inputQuery[key] || '')
          )).split(':');
          if (
            ![
              '$in',
              '$gt',
              '$gte',
              '$lt',
              '$lte',
              '$eq',
              '$ne',
              '$contains',
              '$inRange',
              '$exists',
            ].includes(_op)
          ) {
            throw new RpcException('invalid query ' + _op);
          }
          op = _op;
          value = _value;
          inputType = _inputType;
        }

        switch (op) {
          case '$inRange': {
            const [v1, v2] = (value + '').split(',');
            let parsedValue1: any = v1;
            let parsedValue2: any = v2;
            if (inputType == 'number') {
              // kiểm tra nếu là number
              parsedValue1 = +v1;
              parsedValue2 = +v2;
            } else if (inputType == 'date') {
              // kiểm tra nếu là date
              parsedValue1 = new Date(+v1);
              parsedValue2 = new Date(+v2);
            }
            match[fieldName] = {
              $gte: parsedValue1,
              $lte: parsedValue2,
            };
            break;
          }
          case '$exists': {
            match[fieldName] = {
              $exists: value === 'true',
              $ne: '',
            };
            break;
          }
          case '$in': {
            match[fieldName] = {
              [op]: (value + '').split(','),
            };
            break;
          }
          case '$contains': {
            match[fieldName] = { $regex: value, $options: 'i' };
            break;
          }
          default: {
            let parsedValue: any = value;
            if (inputType == 'number') {
              // kiểm tra nếu là number
              parsedValue = +value;
            } else if (inputType == 'date') {
              // kiểm tra nếu là date
              parsedValue = new Date(+value);
            } else if (inputType == 'bool') {
              // kiểm tra nếu là date
              parsedValue = value === 'true';
            }
            match[fieldName] = {
              [op]: parsedValue,
            };
          }
        }
      });
    pipeline.push({ $match: match });

    // group
    let AggField: string;
    if (inputQuery.$group) {
      this.logger.log('inputQuery.$group', inputQuery.$group);
      const [fields, matchValues, valueCols] = (<string>(
        inputQuery.$group
      )).split(':');
      const fieldsArr = fields.split(',');

      this.logger.log('inputQuery.$group', { fields, matchValues });
      const group = {
        _id: {},
      };

      if (matchValues && matchValues.length > 0) {
        matchValues.split(',').forEach((value) => {
          // 1. thêm vào match
          // TODO: check kiểu number nếu có
          match[fieldsArr[0]] = value;

          // 2. loại khỏi fieldsArr
          fieldsArr.shift();
        });
      }

      if (fieldsArr.length > 0) {
        const field = fieldsArr[0];
        AggField = field;

        group._id[field] = `$${field}`;
        group[field] = { $first: `$${field}` };
        group['count'] = { $sum: 1 };
        if (valueCols && valueCols.length > 0) {
          valueCols.split(',').forEach((vfield) => {
            group[vfield] = { $sum: `$${vfield}` };
          });
        }

        pipeline.push({ $group: group });
      }
    }

    // xuất pipeline để đếm số documents
    const totalDocumentsPipeline = [...pipeline];

    // chuẩn hoá sort
    const sort = {};
    if (inputQuery.$sort) {
      (<string>inputQuery.$sort).split(',').map((o) => {
        const [key, value] = o.split(':');
        sort[key] = +value;
      });
    } else {
      sort['_id'] = -1;
    }
    pipeline.push({ $sort: sort });

    // chuẩn hoá limit, page
    const page = +inputQuery.$page || 0;
    const limit = +inputQuery.$limit || 20;

    pipeline.push({ $skip: page * limit });
    pipeline.push({ $limit: limit });

    this.logger.log('transaction query pipeline', pipeline);

    return {
      limit,
      page,
      pipeline,
      totalDocumentsPipeline,
      AggField,
    };
  }
}

// function test() {
//   const inputQuery = {
//     agencyCode: '$in:A009,A001',
//     type: '$eq:Deposit',
//     $limit: '5',
//     $page: '1',
//     $sort: 'createdAt:-1',
//   };

//   const qh = new QueryHelperService();

//   const result = qh.queryObjectToPipeline(inputQuery);

//   this.logger.log('queryObjectToPipeline test', result);
// }

// test();
