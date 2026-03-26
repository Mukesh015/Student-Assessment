import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateCourseDto {
    @ApiProperty({ example: 'NestJS Fundamentals' })
    @IsString()
    title!: string;

    @ApiProperty({ example: 'Learn backend development with NestJS' })
    @IsString()
    description!: string;

    @ApiProperty({ example: 30 })
    @IsNumber()
    duration!: number;
}