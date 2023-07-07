import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { School } from './entities/school.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { Status } from 'src/enum/status.enum';
import { Faculty } from 'src/faculty/entities/faculty.entity';

@Injectable()
export class SchoolService {
  constructor(
    @InjectRepository(School)
    private readonly schoolRepository: Repository<School>,
    @InjectRepository(Faculty)
    private readonly FacultyRepository: Repository<Faculty>,
  ) { }

  async findAll(): Promise<School[]> {
    return await this.schoolRepository.find({
      where: { deleted_at: IsNull() }, relations: {
        sections: true, facultad: true
      }
    })
  };

  async findOne(id: number): Promise<School> {
    return await this.schoolRepository.findOne({
      where: { id: id, deleted_at: IsNull() }, relations: {
        sections: true, facultad: true
      }
    });
  }

  async create(schooldto: CreateSchoolDto): Promise<School> {
    const Faculty = await this.FacultyRepository.findOne({ where: { id: schooldto.facultadId, deleted_at: IsNull() } });
    if (!Faculty) {
      throw new NotFoundException(`No se encontró ningún Faculty con el id: ${schooldto.facultadId}`);
    }
    const school = new School();
    school.facultad = Faculty;
    school.name = schooldto.name;
    school.description = schooldto.description;

    return this.schoolRepository.save(school);
  }

  async update(id: number, school: UpdateSchoolDto): Promise<School> {
    const School = await this.schoolRepository.findOne({ where: { id: id, deleted_at: IsNull() } });
    if (!School) {
      throw new NotFoundException(`No se encontró ningún School con el id: ${id}`);
    }
    const Faculty = await this.FacultyRepository.findOne({ where: { id: school.facultadId, deleted_at: IsNull() } });
    if (!Faculty) {
      throw new NotFoundException(`No se encontró ningún Faculty con el id: ${school.facultadId}`);
    }
    School.facultad = Faculty;
    School.name = school.name;
    School.description = school.description;
    const SchoolGuardado = await this.schoolRepository.save(School);
    return SchoolGuardado;
  }

  async delete(id: number): Promise<void> {
    await this.schoolRepository.update({ id }, { deleted_at: new Date(), status: Status.Disabled });
  }
}