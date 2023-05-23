import { IsNotEmpty, IsString } from "class-validator"
import { Users } from "src/entities/Users.entity"
import { List_of_disciplines } from "src/entities/list_of_disciplines.entity"

export class correction_listDto {
    @IsNotEmpty()
    id: number

    @IsNotEmpty()
    list_of_disciplines_id: List_of_disciplines

    @IsNotEmpty()
    @IsString()
    remark: string
}