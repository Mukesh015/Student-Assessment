import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateStudentDto {
    @IsString()
    name!: string;

    @IsEmail()
    email!: string;

    @IsOptional()
    @IsString()
    phone?: string;
}