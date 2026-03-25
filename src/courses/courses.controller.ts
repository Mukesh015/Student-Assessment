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
import { CoursesService } from './courses.service';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/roles/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';

@Controller('courses')
@UseGuards(JwtAuthGuard, RolesGuard)
export class CoursesController {
    constructor(private readonly coursesService: CoursesService) { }

    // ✅ Create
    @Post()
    @Roles('admin', 'agent')
    create(@Body() dto: any) {
        return this.coursesService.create(dto);
    }

    // ✅ Read
    @Get()
    @Roles('admin', 'agent', 'user')
    findAll() {
        return this.coursesService.findAll();
    }

    // ✅ Update
    @Put(':id')
    @Roles('admin', 'agent')
    update(@Param('id') id: string, @Body() dto: any) {
        return this.coursesService.update(id, dto);
    }

    // ✅ Delete
    @Delete(':id')
    @Roles('admin')
    remove(@Param('id') id: string) {
        return this.coursesService.remove(id);
    }
}