import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Correction_list } from 'src/entities/correction_list.entity';
import { Repository } from 'typeorm';
import { correction_listDto } from './correction_list.dto';

@Injectable()
export class CorrectionListService {
    constructor(@InjectRepository(Correction_list) private correction_listModale: Repository<Correction_list>) { }

    public create(data: correction_listDto) {
        return this.correction_listModale.save(data)
    }
}