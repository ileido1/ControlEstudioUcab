import { Test, TestingModule } from '@nestjs/testing';
import { EnrrollmentService } from './enrrollment.service';

describe('EnrrollmentService', () => {
  let service: EnrrollmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnrrollmentService],
    }).compile();

    service = module.get<EnrrollmentService>(EnrrollmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
