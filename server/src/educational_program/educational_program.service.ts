import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Educational_programDto } from './educational_program.dto';
import { Educational_program } from '../entities/educational_program.entity';
import { List_of_disciplines } from 'src/entities/list_of_disciplines.entity';
import AppDataSource from 'src/typeorm.config';

@Injectable()
export class EducationalProgramService {
    constructor(@InjectRepository(Educational_program) private educational_programModale: Repository<Educational_program>) { }

    public getAll() {
        return this.educational_programModale.find()
    }

    public getProgramm(id: number) {
        return this.educational_programModale.findBy({ id })
    }

    public async getDisciplineList(id: number) {
        const program = await AppDataSource.manager
            .createQueryBuilder()
            .select("list_of_disciplines")
            .from(List_of_disciplines, 'list_of_disciplines')
            .where("list_of_disciplines.educational_program_id = :id", { id })
            .getMany()
        return program;
    }

    public create(data: Educational_programDto) {
        return this.educational_programModale.save(data)
    }

    public delete(id: number) {
        return this.educational_programModale.delete({ id })
    }
}
