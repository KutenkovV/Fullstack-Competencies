import { Module } from '@nestjs/common';
import { EducationalProgramService } from './educational_program.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EducationalProgramController } from './educational_program.controller';
import { Educational_program } from '../entities/educational_program.entity';

@Module({
  providers: [EducationalProgramService],
  controllers: [EducationalProgramController],
  imports: [TypeOrmModule.forFeature(
    [Educational_program]
  )],
  exports: [EducationalProgramService]
})
export class EducationalProgramModule { }
