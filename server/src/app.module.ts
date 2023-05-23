import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import CONNECTION from './database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Educational_program } from './entities/educational_program.entity';
import { EducationalProgramModule } from './educational_program/educational_program.module';
import { ListOfDisciplinesModule } from './list_of_disciplines/list_of_disciplines.module';
import { List_of_disciplines } from './entities/list_of_disciplines.entity';
import { UsersModule } from './users/users.module';
import { Users } from './entities/Users.entity';
import { CorrectionListModule } from './correction_list/correction_list.module';

@Module({
  imports: [
    // @ts-ignore
    TypeOrmModule.forRoot({
      ...CONNECTION,
      synchronize: false,
      autoLoadEntities: true,
      entities: [Educational_program, List_of_disciplines, Users]
    }),
    EducationalProgramModule,
    ListOfDisciplinesModule,
    UsersModule,
    CorrectionListModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
