import { ApiProperty } from '@nestjs/swagger';
export class CreateProfesorDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    dni: number;
    @ApiProperty()
    lastname: string;
}
