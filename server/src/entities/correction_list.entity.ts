import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { List_of_disciplines } from "./list_of_disciplines.entity";

@Entity()
export class Correction_list {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => List_of_disciplines, list_of_disciplines => list_of_disciplines.id)
    list_of_disciplines_id: List_of_disciplines;

    @Column({ type: 'text' })
    remark: string;
}