import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnrrollmentService } from './enrrollment.service';
import { CreateEnrrollmentDto } from './dto/create-enrrollment.dto';
import { UpdateEnrrollmentDto } from './dto/update-enrrollment.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags("enrrollment")
@Controller('enrrollment')
export class EnrrollmentController {
  constructor(private readonly enrrollmentService: EnrrollmentService) { }

  @Post()
  create(@Body() createEnrrollmentDto: CreateEnrrollmentDto) {
    return this.enrrollmentService.create(createEnrrollmentDto);
  }

  @Get()
  findAll() {
    return this.enrrollmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enrrollmentService.findOne(+id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enrrollmentService.delete(+id);
  }
}
