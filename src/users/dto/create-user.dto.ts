import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsString, MinLength } from 'class-validator';
import { UserRole } from '../schema/user.schema';

export class CreateUserDto {
    @ApiProperty({ example: 'Mukesh' })
    @IsString()
    name!: string;

    @ApiProperty({ example: 'mukesh@test.com' })
    @IsEmail()
    email!: string;

    @ApiProperty({ example: '123456' })
    @MinLength(6)
    password!: string;

    @ApiProperty({ enum: UserRole, example: 'admin' })
    @IsEnum(UserRole)
    role!: UserRole;
}