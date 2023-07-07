import { ApiProperty } from "@nestjs/swagger";
import { BaseDto } from "src/BaseDTO/BaseDTO";
import { Type } from "src/enum/type.enum.";

export class CreateSectionDto extends BaseDto {
    @ApiProperty()
    uc: number;
    @ApiProperty()
    semester: number;
    @ApiProperty()
    schoolId: number;
    @ApiProperty({ enum: Type })
    role: Type;
    @ApiProperty({
        description: 'Horas de teoria',
        minimum: 1,
        default: 1,
    })
    ht: number;
    @ApiProperty({
        description: 'Horas de practica',
        minimum: 1,
        default: 1,
    })
    hp: number;
    @ApiProperty({
        description: 'Horas de laboratorio',
        minimum: 1,
        default: 1,
    })
    hl: number;

}
