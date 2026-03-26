import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsOptional, IsString, MinLength } from 'class-validator';
import { UserRole } from '../../users/schema/user.schema';

export class RegisterDto {
    @ApiProperty()
    @IsString()
    name!: string;

    @ApiProperty()
    @IsEmail()
    email!: string;

    @ApiProperty()
    @MinLength(6)
    password!: string;

    @ApiProperty({ enum: UserRole, required: false })
    @IsOptional()
    @IsEnum(UserRole)
    role?: UserRole;
}