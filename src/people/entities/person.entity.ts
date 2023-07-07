import { Base } from 'src/BaseEntities/base.entity';
import { Section } from 'src/section/entities/section.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, Unique, BaseEntity } from 'typeorm';

@Unique(['dni'])
export abstract class Person extends Base {

  @Column()
  name: string;

  @Column()
  dni: number;

  @Column()
  lastname: string;
 
 
}




