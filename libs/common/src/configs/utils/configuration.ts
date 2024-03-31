import { Logger } from '@nestjs/common';
import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME = './config.yaml';

function parseYaml(inputObj, env) {
  const input = JSON.stringify(inputObj);

  // let i = 0;
  const result = input.replace(
    /\${([A-Za-z]\w*)}/g,
    function (matchedStr, value) {
      // Logger.log(++i, { matchedStr, value }, 'parseYaml');
      return env[value]?.split('\n').join('\\n');
    },
  );

  return JSON.parse(result);
}

export default (options: any) => {
  Logger.log(options, __dirname, '# configuration load');
  const result = yaml.load(
    readFileSync(options.path || join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
  ) as Record<string, any>;

  return parseYaml(result, process.env);
};
