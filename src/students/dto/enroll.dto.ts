import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsMongoId } from 'class-validator';

export class EnrollDto {
    @ApiProperty({
        example: ['65fabc1234567890abcd1111'],
        description: 'Array of course IDs',
    })
    @IsArray()
    @IsMongoId({ each: true })
    courseIds!: string[];
}