import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { List_of_disciplines } from './list_of_disciplines.entity';

@Entity()
export class Educational_program {
    @PrimaryGeneratedColumn()
    @OneToMany(type => List_of_disciplines, list_of_disciplines => list_of_disciplines.educational_program_id,{ cascade: ["remove"] })
    id: number;

    @Column({ type: "varchar", length: 15, unique: true })
    code: string;

    @Column({ length: 50, unique: true })
    title: string;
}