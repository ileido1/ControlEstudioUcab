import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { Faculty } from './entities/faculty.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { Status } from 'src/enum/status.enum';

@Injectable()
export class FacultyService {
  constructor(
    @InjectRepository(Faculty) private readonly FacultyRepository: Repository<Faculty>,
  ) { }

  async findAll(): Promise<Faculty[]> {
    return this.FacultyRepository.find({
      where: { deleted_at: IsNull() }, relations: {
        school: true,
      }
    })
  };
  async findOne(id: number): Promise<Faculty> {
    return this.FacultyRepository.findOne({
      where: { id: id, deleted_at: IsNull() }, relations: {
        school: true,
      }
    });
  }
  async create(Faculty: CreateFacultyDto): Promise<Faculty> {
    return this.FacultyRepository.save(Faculty);
  }

  async delete(id: number): Promise<void> {
    await this.FacultyRepository.update({ id }, { deleted_at: new Date(), status: Status.Disabled });
  }

  async update(id: number, FacultyActualizado: Partial<Faculty>): Promise<Faculty> {
    const Faculty = await this.FacultyRepository.findOne({ where: { id: id, deleted_at: IsNull() } });
    if (!Faculty) {
      throw new NotFoundException(`No se encontró ningún Faculty con el id: ${id}`);
    }
    const FacultyActualizadoObj = Object.assign(Faculty, FacultyActualizado);
    const FacultyGuardado = await this.FacultyRepository.save(FacultyActualizadoObj);
    return FacultyGuardado;
  }


}
