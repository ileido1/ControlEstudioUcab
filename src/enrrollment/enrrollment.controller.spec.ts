import { Test, TestingModule } from '@nestjs/testing';
import { EnrrollmentController } from './enrrollment.controller';
import { EnrrollmentService } from './enrrollment.service';

describe('EnrrollmentController', () => {
  let controller: EnrrollmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnrrollmentController],
      providers: [EnrrollmentService],
    }).compile();

    controller = module.get<EnrrollmentController>(EnrrollmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
