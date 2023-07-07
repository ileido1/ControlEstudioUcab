
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, ManyToMany } from 'typeorm';
import { Section } from 'src/section/entities/section.entity';
import { Person } from './person.entity';
import { Enrrollment } from 'src/enrrollment/entities/enrrollment.entity';

@Entity()
export class Profesor extends Person {
  @OneToMany(() => Enrrollment, Enrrollment => Enrrollment.teacher)
  public sections: Enrrollment[];

}
