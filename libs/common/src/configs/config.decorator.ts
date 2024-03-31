import { Inject } from '@nestjs/common';

import { ClientConfig as CFClient } from './config.service';

export function ConfigClient(): (
  target: Record<string, any>,
  key: string | symbol,
  index?: number,
) => void {
  return Inject(CFClient);
}
