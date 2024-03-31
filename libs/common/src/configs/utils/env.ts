export enum EnvType {
  LOCAL = 'local',
  DEVELOP = 'development',
  STAGING = 'staging',
  PRODUCTION = 'production',
}

export type IsUseEnvironmentValue = {
  [EnvType.LOCAL]: string | number | boolean;
  [EnvType.DEVELOP]: string | number | boolean;
  [EnvType.STAGING]: string | number | boolean;
  [EnvType.PRODUCTION]: string | number | boolean;
};

export const getEnv = (): string => {
  let env = EnvType.LOCAL;
  const nodeEnv = process.env.NODE_ENV || EnvType.LOCAL;

  if (nodeEnv.toLowerCase() === EnvType.DEVELOP) env = EnvType.DEVELOP;
  if (nodeEnv.toLowerCase() === EnvType.STAGING) env = EnvType.STAGING;
  if (nodeEnv.toLowerCase() === EnvType.PRODUCTION) env = EnvType.PRODUCTION;

  return env;
};

export const isProduction = (): boolean => {
  return getEnv() === EnvType.PRODUCTION;
};

export const isDevelop = (): boolean => {
  return getEnv() === EnvType.DEVELOP;
};

export const isStaging = (): boolean => {
  return getEnv() === EnvType.STAGING;
};

export const isLocal = (): boolean => {
  return getEnv() === EnvType.LOCAL;
};

/**
 * [Local]: Nếu không có config cho local sẽ dùng config của Development

 * [Development]: Nếu không có config cho Development sẽ dùng config của Local
 *
 * [Staging]: Nếu không có config cho Staging sẽ dùng config của Development
 *
 * [Production]: Nếu không có config cho Production sẽ trả về null
 * @param values
 * @returns
 */
export const isUseEnvironment = (values: Partial<IsUseEnvironmentValue>) => {
  if (isLocal()) return values[EnvType.LOCAL] || values[EnvType.DEVELOP];
  if (isDevelop()) return values[EnvType.DEVELOP] || values[EnvType.LOCAL];
  if (isStaging()) return values[EnvType.STAGING] || values[EnvType.DEVELOP];
  if (isProduction()) return values[EnvType.PRODUCTION];

  return null;
};
