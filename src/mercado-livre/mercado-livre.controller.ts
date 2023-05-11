import { Controller, Get } from '@nestjs/common';
import { MercadoLivreService } from './mercado-livre.service';

@Controller('mercado-livre')
export class MercadoLivreController {
  constructor(private readonly mercadoLivreService: MercadoLivreService) {}

  @Get('user')
  async getUserInfo() {
    return this.mercadoLivreService.getUserInfo();
  }
}
