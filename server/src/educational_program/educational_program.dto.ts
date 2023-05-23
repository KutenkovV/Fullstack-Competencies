import { IsNotEmpty, IsString } from "class-validator"

export class Educational_programDto {
    @IsNotEmpty()
    public id: number

    @IsNotEmpty()
    @IsString()
    public code: string

    @IsString()
    @IsNotEmpty()
    public title: string
}