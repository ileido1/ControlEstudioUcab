import { Base } from "src/BaseEntities/base.entity"
import { Profesor } from "src/people/entities/profesor.entity"
import { Student } from "src/people/entities/student.entity"
import { Section } from "src/section/entities/section.entity"
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm"

@Entity()
@Unique(['student', 'section'])
export class Enrrollment extends Base {


    @ManyToOne(() => Student, (post) => post.sections)
    public student: Student

    @ManyToOne(() => Profesor, (prof) => prof.sections)
    public teacher: Profesor

    @ManyToOne(() => Section, (sec) => sec.enrollments)
    public section: Section;
}