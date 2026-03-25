import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Course, CourseDocument } from './schema/course.schema';
import { Model } from 'mongoose';

@Injectable()
export class CoursesService {
    constructor(
        @InjectModel(Course.name)
        private courseModel: Model<CourseDocument>,
    ) { }

    async create(dto: any) {
        return this.courseModel.create(dto);
    }

    async findAll() {
        return this.courseModel.find();
    }

    async update(id: string, dto: any) {
        const course = await this.courseModel.findByIdAndUpdate(id, dto, {
            new: true,
        });

        if (!course) throw new NotFoundException('Course not found');
        return course;
    }

    async remove(id: string) {
        const course = await this.courseModel.findByIdAndDelete(id);

        if (!course) throw new NotFoundException('Course not found');
        return { message: 'Course deleted' };
    }
}