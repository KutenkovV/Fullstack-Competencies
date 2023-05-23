import { Body, Controller, Post } from '@nestjs/common';
import { CorrectionListService } from './correction_list.service';
import { List_of_disciplinesDto } from 'src/list_of_disciplines/list_of_disciplines.dto';
import { correction_listDto } from './correction_list.dto';

@Controller('api/correction-list')
export class CorrectionListController {
    constructor(private listOfDisciplinesService: CorrectionListService) { }

    // Создать учебную программу
    @Post('create')
    public create(@Body() body: correction_listDto) {
        return this.listOfDisciplinesService.create(body);
    }
}
