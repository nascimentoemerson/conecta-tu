import { Injectable } from '@nestjs/common';
import { MeliService } from 'mercadolivre';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MercadoLivreService {
  private readonly meliService: MeliService;

  constructor(private readonly configService: ConfigService) {
    this.meliService = new MeliService({
      client_id: this.configService.get<string>('6797886473161778'),
      client_secret: this.configService.get<string>('ZrLqMqcjLvSVzmplq2IxjTOYQi3vhHE3'),
      access_token: null,
      refresh_token: null,
    });
  }

  async getUserInfo() {
    const response = await this.meliService.get('/users/me');
    return response.data;
  }
}