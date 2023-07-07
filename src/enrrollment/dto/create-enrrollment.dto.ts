import { ApiProperty } from "@nestjs/swagger";
import { BaseDto } from "src/BaseDTO/BaseDTO";

export class CreateEnrrollmentDto {

    @ApiProperty()
    studentId: number;
    @ApiProperty()
    teacherId: number;
    @ApiProperty()
    sectionId: number;

}
