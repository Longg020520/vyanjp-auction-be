import * as fs from 'fs';
import * as yaml from 'js-yaml';

/**
 * Chuuyển file yaml về định dạng JSON
 * @param path
 * @returns
 */
export const loadYamlFile = (path: string) => {
  return yaml.load(fs.readFileSync(path, 'utf8'));
};
