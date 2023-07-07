import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, Unique } from 'typeorm';
import { Base } from './base.entity';

export abstract class EntityBase extends Base {
    @Column()
    name: string;
  
    @Column()
    description: string;
}




