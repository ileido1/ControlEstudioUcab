import { Module } from '@nestjs/common';
import { SchoolService } from './school.service';
import { SchoolController } from './school.controller';
import { School } from './entities/school.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Faculty } from 'src/faculty/entities/faculty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Faculty, School])],
  controllers: [SchoolController],
  providers: [SchoolService]
})
export class SchoolModule { }
