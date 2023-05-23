import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { EducationalProgramService } from './educational_program.service';
import { Educational_programDto } from './educational_program.dto';

@Controller('api/educational-program')
export class EducationalProgramController {
    constructor(private educationalService: EducationalProgramService) { }

    // Получить список всех учебных программ
    @Get('getAll')
    public getAll() {
        return this.educationalService.getAll();
    }

    @Get('getProgramm/:id')
    public getProgramm(@Param('id') id: number) {
        return this.educationalService.getProgramm(id);
    }

    // Получить все дисциплины по учебной программе
    @Get('subject/:id')
    public getDisciplineList(@Param('id') id: number) {
        return this.educationalService.getDisciplineList(id);
    }

    // Создать учебную программу
    @Post('create')
    public create(@Body() body: Educational_programDto) {
        return this.educationalService.create(body);
    }

    // удалить учебную программу
    @Delete('delete/:id')
    public delete(@Param('id') id: number) {
        return this.educationalService.delete(id);
    }
}
