import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { Profesor } from './entities/profesor.entity';
import { Student } from './entities/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Person, Profesor, Student])],
  controllers: [PeopleController],
  providers: [PeopleService]
})
export class PeopleModule {}
