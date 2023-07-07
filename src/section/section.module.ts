import { Module } from '@nestjs/common';
import { SectionService } from './section.service';
import { SectionController } from './section.controller';
import { Section } from './entities/section.entity';
import { School } from 'src/school/entities/school.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Section, School])],
  controllers: [SectionController],
  providers: [SectionService]
})
export class SectionModule { }
