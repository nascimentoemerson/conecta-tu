import { Test, TestingModule } from '@nestjs/testing';
import { MercadoLivreService } from './mercado-livre.service';

describe('MercadoLivreService', () => {
  let service: MercadoLivreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MercadoLivreService],
    }).compile();

    service = module.get<MercadoLivreService>(MercadoLivreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
