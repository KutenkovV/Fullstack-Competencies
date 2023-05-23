import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ListOfDisciplinesService } from './list_of_disciplines.service';
import { List_of_disciplinesDto } from './list_of_disciplines.dto';
import { List_of_disciplines } from 'src/entities/list_of_disciplines.entity';

@Controller('api/list-of-disciplines')
export class ListOfDisciplinesController {
    constructor(private listOfDisciplinesService: ListOfDisciplinesService) { }

    // Получить список всех предметов по учебной программе
    @Get('getAll/:id')
    public getAll(@Param('id') id: number) {
        return this.listOfDisciplinesService.getAll(id);
    }

    // Получить список всех предметов по учебной программе
    @Get('getDiscipline/:id')
    public getDiscipline(@Param('id') id: number) {
        return this.listOfDisciplinesService.getDiscipline(id);
    }

    // Получить все дисциплины по учебной программе
    @Get('correction/:id')
    public getCorrectionList(@Param('id') id: number) {
        return this.listOfDisciplinesService.getCorrectionList(id);
    }

    // Получить список всех предметов по учебной программе
    @Put('updateDiscipline/:id')
    public updateDiscipline(@Param('id') id: number, @Body() body: List_of_disciplines) {
        return this.listOfDisciplinesService.updateDiscipline(id, body);
    }

    // Создать учебную программу
    @Post('create')
    public create(@Body() body: List_of_disciplinesDto) {
        return this.listOfDisciplinesService.create(body);
    }

    // удалить учебную программу
    @Delete('delete/:id')
    public delete(@Param('id') id: number) {
        return this.listOfDisciplinesService.delete(id);
    }
}
