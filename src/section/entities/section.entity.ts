import { EntityBase } from "src/BaseEntities/entity.entity";
import { Enrrollment } from "src/enrrollment/entities/enrrollment.entity";
import { Type } from "src/enum/type.enum.";
import { School } from "src/school/entities/school.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Section extends EntityBase {

  @Column()
  uc: number;
  @Column()
  semester: number;
  @Column({
    type: 'enum',
    enum: Type,
    default: Type.Mandatory,
  })
  Type: Type;
  @Column('decimal', { precision: 6, scale: 2 })
  ht: number;
  @Column('decimal', { precision: 6, scale: 2 })
  hp: number;
  @Column('decimal', { precision: 6, scale: 2 })
  hl: number;

  @OneToMany(() => Enrrollment, Enrrollment => Enrrollment.student)
  @OneToMany(() => Enrrollment, Enrrollment => Enrrollment.teacher)

  @OneToMany(() => Enrrollment, enrollment => enrollment.section)
  enrollments: Enrrollment[];

  @ManyToOne(() => School, shool => shool.sections)
  schools: School;


}