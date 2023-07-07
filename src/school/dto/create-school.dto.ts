import { ApiProperty } from "@nestjs/swagger";
import { BaseDto } from "src/BaseDTO/BaseDTO";
import { Faculty } from "src/faculty/entities/faculty.entity";

export class CreateSchoolDto extends BaseDto {
    @ApiProperty()
    facultadId: number;
}
