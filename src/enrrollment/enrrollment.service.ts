import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEnrrollmentDto } from './dto/create-enrrollment.dto';
import { UpdateEnrrollmentDto } from './dto/update-enrrollment.dto';
import { Enrrollment } from './entities/enrrollment.entity';
import { Student } from 'src/people/entities/student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { Section } from 'src/section/entities/section.entity';
import { Profesor } from 'src/people/entities/profesor.entity';
import { Status } from 'src/enum/status.enum';

@Injectable()
export class EnrrollmentService {
  constructor(
    @InjectRepository(Enrrollment)
    private readonly EnrollmentRepository: Repository<Enrrollment>,
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(Profesor)
    private readonly teacherRepository: Repository<Profesor>,
    @InjectRepository(Section)
    private readonly sectionRepository: Repository<Section>
  ) { }

  async findAll(): Promise<Enrrollment[]> {
    return await this.EnrollmentRepository.find({
      where: { deleted_at: IsNull() }, relations: {
        student: true, teacher: true, section: true
      }
    })
  };

  async findOne(id: number): Promise<Enrrollment> {
    return await this.EnrollmentRepository.findOne({
      where: { id: id, deleted_at: IsNull() }, relations: {
        student: true, teacher: true, section: true
      }
    });
  }

  async create(enrrolementdto: CreateEnrrollmentDto): Promise<Enrrollment> {
    const Student = await this.studentRepository.findOne({ where: { id: enrrolementdto.studentId, deleted_at: IsNull() } });
    if (!Student) {
      throw new NotFoundException(`No se encontró ningún Student con el id: ${enrrolementdto.studentId}`);
    }
    const teacher = await this.teacherRepository.findOne({ where: { id: enrrolementdto.teacherId, deleted_at: IsNull() } });
    if (!teacher) {
      throw new NotFoundException(`No se encontró ningún teacher con el id: ${enrrolementdto.teacherId}`);
    }
    const section = await this.sectionRepository.findOne({ where: { id: enrrolementdto.sectionId, deleted_at: IsNull() } });
    if (!teacher) {
      throw new NotFoundException(`No se encontró ningún section con el id: ${enrrolementdto.sectionId}`);
    }
    const enrrolemnt = new Enrrollment();
    enrrolemnt.student = Student;
    enrrolemnt.teacher = teacher;
    enrrolemnt.section = section;
    return this.EnrollmentRepository.save(enrrolemnt);
  }

  async delete(id: number): Promise<void> {
    await this.EnrollmentRepository.update({ id }, { deleted_at: new Date(), status: Status.Disabled });
  }
}
