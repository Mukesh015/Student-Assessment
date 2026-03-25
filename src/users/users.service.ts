import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<UserDocument>,
    ) { }

    async create(userData: Partial<User>) {
        return this.userModel.create(userData);
    }

    async findAll() {
        return this.userModel.find().select('-password');
    }

    async findByEmail(email: string) {
        return this.userModel.findOne({ email });
    }

    async findById(id: string) {
        const user = await this.userModel.findById(id).select('-password');
        if (!user) throw new NotFoundException('User not found');
        return user;
    }

    async remove(id: string) {
        const user = await this.userModel.findByIdAndDelete(id);
        if (!user) throw new NotFoundException('User not found');
        return { message: 'User deleted successfully' };
    }
}