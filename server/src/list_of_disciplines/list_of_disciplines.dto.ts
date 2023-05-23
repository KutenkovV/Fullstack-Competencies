import { IsNotEmpty, IsString } from "class-validator"
import { Users } from "src/entities/Users.entity"
import { Educational_program } from "src/entities/educational_program.entity"

export class List_of_disciplinesDto {
    @IsNotEmpty()
    id: number

    @IsNotEmpty()
    educational_program_id: Educational_program

    @IsNotEmpty()
    user_id: Users

    @IsNotEmpty()
    @IsString()
    title: string

    @IsString()
    knowledge: string;

    @IsString()
    skills: string;

    @IsString()
    abilities: string;
}