import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MercadoLivreConfigService {
  constructor(private readonly configService: ConfigService) {}

  get mercadoLivreClientId(): string {
    return this.configService.get<string>('6797886473161778');
  }

  get mercadoLivreClientSecret(): string {
    return this.configService.get<string>('ZrLqMqcjLvSVzmplq2IxjTOYQi3vhHE3');
  }
}
