import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseGuards,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/roles/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';

@Controller('students')
@UseGuards(JwtAuthGuard, RolesGuard)
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) { }

    // ✅ Create
    @Post()
    @Roles('admin', 'agent')
    create(@Body() dto: any) {
        return this.studentsService.create(dto);
    }

    // ✅ Read all
    @Get()
    @Roles('admin', 'agent', 'user')
    findAll() {
        return this.studentsService.findAll();
    }

    // ✅ Read one
    @Get(':id')
    @Roles('admin', 'agent', 'user')
    findOne(@Param('id') id: string) {
        return this.studentsService.findOne(id);
    }

    // ✅ Update
    @Put(':id')
    @Roles('admin', 'agent')
    update(@Param('id') id: string, @Body() dto: any) {
        return this.studentsService.update(id, dto);
    }

    // ✅ Delete
    @Delete(':id')
    @Roles('admin')
    remove(@Param('id') id: string) {
        return this.studentsService.remove(id);
    }

    // ✅ Enroll in courses
    @Post(':id/enroll')
    @Roles('admin', 'agent')
    enroll(
        @Param('id') id: string,
        @Body('courseIds') courseIds: string[],
    ) {
        return this.studentsService.enroll(id, courseIds);
    }
}