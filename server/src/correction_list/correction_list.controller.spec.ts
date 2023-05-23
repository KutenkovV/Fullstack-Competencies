import { Test, TestingModule } from '@nestjs/testing';
import { CorrectionListController } from './correction_list.controller';

describe('CorrectionListController', () => {
  let controller: CorrectionListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CorrectionListController],
    }).compile();

    controller = module.get<CorrectionListController>(CorrectionListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
