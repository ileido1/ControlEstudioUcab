import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { IsNull, Repository } from 'typeorm';
import { Profesor } from './entities/profesor.entity';
import { Student } from './entities/student.entity';
import { CreateStudentDTO } from './dto/create-student.dto';
import { Status } from 'src/enum/status.enum';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(Profesor) private readonly ProfesorRepository: Repository<Profesor>,
    @InjectRepository(Student) private readonly studentRepository: Repository<Profesor>) { }

  async findAllTeachers(): Promise<Person[]> {
    return this.ProfesorRepository.find({
      where: { deleted_at: IsNull() }
    })
  };
  async findOneTeacher(id: number): Promise<Person> {
    return this.ProfesorRepository.findOne({ where: { id: id, deleted_at: IsNull() } });
  }
  async findAllStudents(): Promise<Person[]> {
    return this.studentRepository.find({
      where: { deleted_at: IsNull() }
    })
  };
  async findOneStudent(id: number): Promise<Person> {
    return this.ProfesorRepository.findOne({ where: { id: id, deleted_at: IsNull() } });
  }

  async createprofesor(Profesor: CreateProfesorDto): Promise<Profesor> {
    return this.ProfesorRepository.save(Profesor);
  }

  async createStudent(Student: CreateStudentDTO): Promise<Student> {
    return this.studentRepository.save(Student);
  }
  async deleteProfesor(id: number): Promise<void> {
    await this.ProfesorRepository.update({ id }, { deleted_at: new Date(), status: Status.Disabled });
  }
  async deleteStudent(id: number): Promise<void> {
    await this.studentRepository.update({ id }, { deleted_at: new Date(), status: Status.Disabled });
  }
  async updateProfesor(id: number, profesorActualizado: Partial<Profesor>): Promise<Profesor> {
    const profesor = await this.ProfesorRepository.findOne({ where: { id: id, deleted_at: IsNull() } });
    if (!profesor) {
      throw new NotFoundException(`No se encontró ningún profesor con el id: ${id}`);
    }
    const profesorActualizadoObj = Object.assign(profesor, profesorActualizado);
    const profesorGuardado = await this.ProfesorRepository.save(profesorActualizadoObj);
    return profesorGuardado;
  }
  async updateStudent(id: number, studentActualizado: Partial<Student>): Promise<Student> {
    const student = await this.studentRepository.findOne({ where: { id: id, deleted_at: IsNull() } });
    if (!student) {
      throw new NotFoundException(`No se encontró ningún profesor con el id: ${id}`);
    }
    const studentActualizadoObj = Object.assign(student, studentActualizado);
    const studentGuardado = await this.studentRepository.save(studentActualizadoObj);
    return studentGuardado;
  }
}
