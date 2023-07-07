import { ApiProperty } from "@nestjs/swagger";

export class CreateStudentDTO {
  @ApiProperty()
  name: string;
  @ApiProperty()
  dni: number;
  @ApiProperty()
  lastname: string;
}
