import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateStudentDto {
    @ApiProperty({ example: 'John Doe' })
    @IsString()
    name!: string;

    @ApiProperty({ example: 'john@test.com' })
    @IsEmail()
    email!: string;

    @ApiProperty({ example: '9876543210', required: false })
    @IsOptional()
    @IsString()
    phone?: string;
}