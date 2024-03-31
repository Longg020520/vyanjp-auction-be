//- Các operator hỗ trợ query
export const QUERY_OPERATORS = [
  { key: 'desc', value: -1 },
  { key: 'asc', value: 1 },
  { key: 'in', value: '$in' },
  { key: 'eq', value: '$eq' },
  { key: 'gte', value: '$gte' },
  { key: 'lte', value: '$lte' },
  { key: 'gt', value: '$gt' },
  { key: 'lt', value: '$lt' },
  { key: 'or', value: '$or' },
  { key: 'ne', value: '$ne' },
  { key: 'contains', value: '$regex' },
];

export const LIMIT = 20;
export const OFFSET = 0;
