import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type StudentDocument = Student & Document;

@Schema({ timestamps: true })
export class Student {
    @Prop({ required: true })
    name!: string;

    @Prop({ required: true, unique: true })
    email!: string;

    @Prop()
    phone!: string;

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }])
    enrolledCourses!: string[];
}

export const StudentSchema = SchemaFactory.createForClass(Student);