import { Module } from '@nestjs/common';
import { CorrectionListService } from './correction_list.service';
import { CorrectionListController } from './correction_list.controller';
import { Correction_list } from 'src/entities/correction_list.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [CorrectionListService],
  controllers: [CorrectionListController],
  imports: [
    TypeOrmModule.forFeature(
      [Correction_list],
    ),
  ],
  exports: [CorrectionListService]
})
export class CorrectionListModule { }
