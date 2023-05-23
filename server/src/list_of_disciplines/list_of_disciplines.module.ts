import { Module } from '@nestjs/common';
import { ListOfDisciplinesService } from './list_of_disciplines.service';
import { ListOfDisciplinesController } from './list_of_disciplines.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { List_of_disciplines } from 'src/entities/list_of_disciplines.entity';

@Module({
    providers: [ListOfDisciplinesService],
    controllers: [ListOfDisciplinesController],
    imports: [
        TypeOrmModule.forFeature(
            [List_of_disciplines],
        ),
    ],
    exports: [ListOfDisciplinesService]
})
export class ListOfDisciplinesModule { }
