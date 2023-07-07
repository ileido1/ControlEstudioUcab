import { Status } from 'src/enum/status.enum';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, Unique } from 'typeorm';

export  abstract class Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date;
  
  @Column({
    type: 'enum',
    enum: Status,
    default: Status.Enabled,
  })
  status: Status;
}




