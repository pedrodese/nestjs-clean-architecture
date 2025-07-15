import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvConfigInterface } from './env-config.interface';

@Injectable()
export class EnvConfigService implements EnvConfigInterface {
  constructor(private readonly configService: ConfigService) {}
  getAppPort(): number {
    return Number(this.configService.get<number>('APP_PORT'));
  }
  getNodeEnv(): string {
    return this.configService.get<string>('NODE_ENV') ?? 'development';
  }
}
