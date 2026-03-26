import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('register')
    register(@Body() dto: RegisterDto) { // ✅ FIXED
        return this.authService.register(dto);
    }

    @Post('login')
    login(@Body() dto: LoginDto) { // ✅ FIXED
        return this.authService.login(dto);
    }
}