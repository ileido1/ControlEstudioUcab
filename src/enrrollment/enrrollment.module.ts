import { Module } from '@nestjs/common';
import { EnrrollmentService } from './enrrollment.service';
import { EnrrollmentController } from './enrrollment.controller';
import { Section } from 'src/section/entities/section.entity';
import { Student } from 'src/people/entities/student.entity';
import { Profesor } from 'src/people/entities/profesor.entity';
import { Enrrollment } from './entities/enrrollment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Section, Student, Profesor, Enrrollment])],
  controllers: [EnrrollmentController],
  providers: [EnrrollmentService]
})
export class EnrrollmentModule { }
