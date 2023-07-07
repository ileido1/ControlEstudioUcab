import { EntityBase } from "src/BaseEntities/entity.entity";
import { School } from "src/school/entities/school.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from "typeorm";

@Entity()
export class Faculty extends EntityBase {

  @OneToMany(() => School, school => school.facultad)
  school: School[];



}
