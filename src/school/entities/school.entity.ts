import { EntityBase } from "src/BaseEntities/entity.entity";
import { Faculty } from "src/faculty/entities/faculty.entity";
import { Section } from "src/section/entities/section.entity";
import { PrimaryGeneratedColumn, Column, ManyToOne, Entity, OneToMany, JoinColumn } from "typeorm";

@Entity()
export class School extends EntityBase {


  @ManyToOne(() => Faculty, faculty => faculty.school)
  @JoinColumn()
  facultad: Faculty;

  @OneToMany(() => Section, Section => Section.schools)
  sections: Section[];



}
