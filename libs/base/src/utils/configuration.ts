import { Logger } from '@nestjs/common';
import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';

const logger = new Logger('Configuration');

export default (options: any) => {
  logger.log('load config with options', __dirname, options);
  const result = yaml.load(readFileSync(options.path, 'utf8')) as Record<
    string,
    any
  >;

  return result;
};
