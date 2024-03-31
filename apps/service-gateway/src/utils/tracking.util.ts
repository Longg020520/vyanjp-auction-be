import { PATH_CONFIG } from '@app/common';

export const getActivityforPath = (key: string) => {
  const findDescriptionByPath = (
    data: Record<string, any>,
    pathToFind: string,
  ): string | null => {
    for (const [key, value] of Object.entries(data)) {
      const { path, description } = value;
      const regexPath = new RegExp(
        `^${path?.split('?')[0].replace(/:[^/]+/g, '[^/]+')}$`,
      );
      if (regexPath.test(pathToFind)) {
        return description;
      }
    }
    return pathToFind;
  };

  const description = findDescriptionByPath(PATH_CONFIG, key?.split('?')[0]);

  // const routes = Object.values(PATH_CONFIG);
  // const route = routes.find((item) => item.path == key);

  // if (route) return route.description;
  const result = description ? description : key;
  // console.log('getActivityforPath desc', result);

  return result;
};
