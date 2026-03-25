import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './schema/student.schema';
import { Model } from 'mongoose';
import { Course, CourseDocument } from 'src/courses/schema/course.schema';

@Injectable()
export class StudentsService {
    constructor(
        @InjectModel(Student.name)
        private studentModel: Model<StudentDocument>,

        @InjectModel(Course.name) // ✅ ADD THIS
        private courseModel: Model<CourseDocument>,
    ) { }

    async create(dto: any) {
        return this.studentModel.create(dto);
    }

    async findAll() {
        return this.studentModel.find().populate('enrolledCourses');
    }

    async findOne(id: string) {
        const student = await this.studentModel
            .findById(id)
            .populate('enrolledCourses');

        if (!student) throw new NotFoundException('Student not found');

        return student;
    }

    async update(id: string, dto: any) {
        const student = await this.studentModel.findByIdAndUpdate(id, dto, {
            new: true,
        });

        if (!student) throw new NotFoundException('Student not found');

        return student;
    }

    async remove(id: string) {
        const student = await this.studentModel.findByIdAndDelete(id);

        if (!student) throw new NotFoundException('Student not found');

        return { message: 'Student deleted' };
    }

    async enroll(studentId: string, courseIds: string[]) {
        // ✅ Check student exists
        const student = await this.studentModel.findById(studentId);
        if (!student) throw new NotFoundException('Student not found');

        // ✅ Validate courses exist
        const validCourses = await this.courseModel.find({
            _id: { $in: courseIds },
        });

        if (validCourses.length !== courseIds.length) {
            throw new NotFoundException('One or more courses not found');
        }

        // ✅ Enroll
        const updatedStudent = await this.studentModel
            .findByIdAndUpdate(
                studentId,
                {
                    $addToSet: {
                        enrolledCourses: { $each: courseIds },
                    },
                },
                { new: true },
            )
            .populate('enrolledCourses');

        return updatedStudent;
    }

    async getCourses(studentId: string) {
        const student = await this.studentModel
            .findById(studentId)
            .populate('enrolledCourses');

        if (!student) throw new NotFoundException('Student not found');

        return student.enrolledCourses;
    }
}