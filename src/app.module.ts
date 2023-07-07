import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeopleModule } from './people/people.module';
import { SectionModule } from './section/section.module';
import { SchoolModule } from './school/school.module';
import { FacultyModule } from './faculty/faculty.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { EnrrollmentModule } from './enrrollment/enrrollment.module';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '',
    database: 'distribuidos',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),PeopleModule, SectionModule,  SchoolModule, FacultyModule, EnrrollmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
