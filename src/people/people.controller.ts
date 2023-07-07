import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PeopleService } from './people.service';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { ApiTags } from '@nestjs/swagger';
import { CreateStudentDTO } from './dto/create-student.dto';
@ApiTags('Person')
@Controller('person')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) { }

  @Post("teacher")
  createprofesor(@Body() createPersonDto: CreateProfesorDto) {
    return this.peopleService.createprofesor(createPersonDto);
  }

  @Get("teacher")
  findAll() {
    return this.peopleService.findAllTeachers();
  }

  @Get('teacher/:id')
  findOne(@Param('id') id: string) {
    return this.peopleService.findOneTeacher(+id);
  }

  @Patch('teacher/:id')
  update(@Param('id') id: string, @Body() upadteteacher: UpdatePersonDto) {
    return this.peopleService.updateProfesor(+id, upadteteacher);
  }

  @Delete('teacher/:id')
  remove(@Param('id') id: string) {
    return this.peopleService.deleteProfesor(+id);
  }

  @Post("student")
  createstudent(@Body() createPersonDto: CreateStudentDTO) {
    return this.peopleService.createStudent(createPersonDto);
  }

  @Get("student")
  findAllStudent() {
    return this.peopleService.findAllStudents();
  }

  @Get('student/:id')
  findOneStudent(@Param('id') id: string) {
    return this.peopleService.findOneStudent(+id);
  }

  @Patch('student/:id')
  updatestudent(@Param('id') id: string, @Body() upadteteacher: UpdatePersonDto) {
    return this.peopleService.updateStudent(+id, upadteteacher);
  }

  @Delete('student/:id')
  removestudent(@Param('id') id: string) {
    return this.peopleService.deleteStudent(+id);
  }
}
