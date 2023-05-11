import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MercadoLivreController } from './mercado-livre.controller';
import { MercadoLivreService } from './mercado-livre.service';
import { MercadoLivreConfigService } from './mercado-livre-config.service';

@Module({
  imports: [ConfigModule],
  controllers: [MercadoLivreController],
  providers: [MercadoLivreService, MercadoLivreConfigService],
})
export class MercadoLivreModule {}
