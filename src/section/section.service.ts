import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { Section } from './entities/section.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from 'src/enum/status.enum';
import { Repository, IsNull } from 'typeorm';
import { School } from 'src/school/entities/school.entity';

@Injectable()
export class SectionService {
  constructor(
    @InjectRepository(Section)
    private readonly sectionRepository: Repository<Section>,
    @InjectRepository(School)
    private readonly schoolRepository: Repository<School>
  ) { }

  async findAll(): Promise<Section[]> {
    return await this.sectionRepository.find({
      where: { deleted_at: IsNull() }, relations: {
        enrollments: true, schools: true
      }
    })
  };

  async findOne(id: number): Promise<Section> {
    return await this.sectionRepository.findOne({
      where: { id: id, deleted_at: IsNull() }, relations: ['enrollments', 'enrollments.teacher', 'enrollments.student']
    })
  }
  async findStudentsBySectionId(sectionId: number) {
    const section = await this.sectionRepository.findOne({ where: { id: sectionId, deleted_at: IsNull() }, relations: ['enrollments', 'enrollments.student'] });

    if (section) {
      return section.enrollments.map(enrollment => enrollment.student);
    } else {
      return null;
    }
  }
  async findTeachersBySectionId(sectionId: number) {
    const section = await this.sectionRepository.findOne({ where: { id: sectionId, deleted_at: IsNull() }, relations: ['enrollments', 'enrollments.teacher'] });

    if (section) {
      const teachers = section.enrollments.reduce((teachers, enrollment) => {
        const teacherId = enrollment.teacher.id;
        if (!teachers.some(teacher => teacher.id === teacherId)) {
          teachers.push(enrollment.teacher);
        }
        return teachers;
      }, []);
      return teachers;
    } else {
      return null;
    }
  }

  async create(Sectiondto: CreateSectionDto): Promise<Section> {
    const School = await this.schoolRepository.findOne({ where: { id: Sectiondto.schoolId, deleted_at: IsNull() } });
    if (!School) {
      throw new NotFoundException(`No se encontró ningún School con el id: ${Sectiondto.schoolId}`);
    }
    const section = new Section();
    section.schools = School;
    section.name = Sectiondto.name;
    section.description = Sectiondto.description;
    section.hl = Sectiondto.hl;
    section.ht = Sectiondto.ht;
    section.hp = Sectiondto.hp;
    section.semester = Sectiondto.semester;
    section.uc = Sectiondto.uc;
    return this.sectionRepository.save(section);
  }

  async update(id: number, _Sectiondto: UpdateSectionDto): Promise<Section> {
    const section = await this.sectionRepository.findOne({ where: { id: id, deleted_at: IsNull() } });
    if (!section) {
      throw new NotFoundException(`No se encontró ningún Section con el id: ${id}`);
    }
    const School = await this.schoolRepository.findOne({ where: { id: _Sectiondto.schoolId, deleted_at: IsNull() } });
    if (!School) {
      throw new NotFoundException(`No se encontró ningún School con el id: ${_Sectiondto.schoolId}`);
    }
    section.schools = School;
    section.name = _Sectiondto.name;
    section.description = _Sectiondto.description;
    section.hl = _Sectiondto.hl;
    section.ht = _Sectiondto.ht;
    section.hp = _Sectiondto.hp;
    section.semester = _Sectiondto.semester;
    section.uc = _Sectiondto.uc;
    const SectionGuardado = await this.sectionRepository.save(section);
    return SectionGuardado;
  }

  async delete(id: number): Promise<void> {
    await this.sectionRepository.update({ id }, { deleted_at: new Date(), status: Status.Disabled });
  }
}
