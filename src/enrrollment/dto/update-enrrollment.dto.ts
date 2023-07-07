import { PartialType } from '@nestjs/swagger';
import { CreateEnrrollmentDto } from './create-enrrollment.dto';

export class UpdateEnrrollmentDto extends PartialType(CreateEnrrollmentDto) {}
