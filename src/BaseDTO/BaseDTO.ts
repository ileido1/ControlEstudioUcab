import { ApiProperty } from '@nestjs/swagger';
export class BaseDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    description: string;

}
