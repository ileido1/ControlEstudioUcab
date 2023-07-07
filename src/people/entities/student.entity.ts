import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, ManyToMany } from 'typeorm';
import { Person } from './person.entity';
import { Section } from 'src/section/entities/section.entity';
import { Enrrollment } from 'src/enrrollment/entities/enrrollment.entity';
@Entity()
export class Student extends Person{
  @OneToMany(() => Enrrollment, Enrrollment => Enrrollment.student)
  public sections: Enrrollment[];

}