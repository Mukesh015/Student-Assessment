import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }

    // ✅ Register
    async register(dto: any) {
        const hashedPassword = await bcrypt.hash(dto.password, 10);

        const user = await this.usersService.create({
            ...dto,
            password: hashedPassword,
        });

        return {
            message: 'User registered successfully',
            user,
        };
    }

    // ✅ Login
    async login(dto: any) {

        if (!dto?.email || !dto?.password) {
            throw new UnauthorizedException('Email and password are required');
        }

        const user = await this.usersService.findByEmail(dto.email);

        if (!user) throw new UnauthorizedException('Invalid credentials');

        const isMatch = await bcrypt.compare(dto.password, user.password);

        if (!isMatch) throw new UnauthorizedException('Invalid credentials');

        const payload = {
            sub: user._id,
            role: user.role,
        };

        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}