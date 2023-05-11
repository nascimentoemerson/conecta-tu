import { Test, TestingModule } from '@nestjs/testing';
import { MercadoLivreController } from './mercado-livre.controller';

describe('MercadoLivreController', () => {
  let controller: MercadoLivreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MercadoLivreController],
    }).compile();

    controller = module.get<MercadoLivreController>(MercadoLivreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
