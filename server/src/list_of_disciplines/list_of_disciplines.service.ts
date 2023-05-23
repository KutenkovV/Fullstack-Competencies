import { Injectable } from '@nestjs/common';
import { List_of_disciplinesDto } from './list_of_disciplines.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { List_of_disciplines } from 'src/entities/list_of_disciplines.entity';
import { Repository } from 'typeorm';
import AppDataSource from 'src/typeorm.config';
import { Correction_list } from 'src/entities/correction_list.entity';

@Injectable()
export class ListOfDisciplinesService {
    constructor(@InjectRepository(List_of_disciplines) private list_of_disciplinesModale: Repository<List_of_disciplines>) { }

    public getAll(id: number) {
        return this.list_of_disciplinesModale.findBy({ id })
    }

    public getDiscipline(id: number) {
        return this.list_of_disciplinesModale.findBy({ id })
    }

    public async updateDiscipline(id: number, data: List_of_disciplines) {
        // await this.findOne(id);
        return this.list_of_disciplinesModale.update(id, data)
        // await AppDataSource
        //     .createQueryBuilder()
        //     .update(List_of_disciplines)
        //     .set({ ...data })
        //     // .set({ title: data.title, knowledge: data.knowledge, skills: data.skills, abilities: data.abilities })
        //     .where("id = :id", { id })
        //     .execute()

        // console.log(discipline);
        // return discipline;
    }

    public async getCorrectionList(id: number) {
        const program = await AppDataSource.manager
            .createQueryBuilder()
            .select("correction_list")
            .from(Correction_list, 'correction_list')
            .where("correction_list.list_of_disciplines_id = :id", { id })
            .getMany()
        return program;
    }

    findOne(id: number) {
        throw new Error('Method not implemented.');
    }
    public create(data: List_of_disciplinesDto) {
        return this.list_of_disciplinesModale.save(data)
    }

    public delete(id: number) {
        return this.list_of_disciplinesModale.delete(id)
    }
}
