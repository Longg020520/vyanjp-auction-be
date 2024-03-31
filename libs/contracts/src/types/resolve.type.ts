export type BodyParse = {
  [key in string]: any;
};

export type QueryParse = {
  [key in string]: any;
};

export type ParamsParse = {
  [key in string]: any;
};

export type ServiceResponse<T = any> = {
  code: number;
  data?: T;
};
