import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { EVENT_CONFIG } from './constants/event.constant';

@Injectable()
export class ClientConfig extends ConfigService {
  public readonly event = EVENT_CONFIG;

  constructor(readonly configService: ConfigService) {
    super(configService);
  }
}
