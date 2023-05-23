import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Educational_program } from './educational_program.entity';
import { Users } from './Users.entity';

@Entity()
export class List_of_disciplines {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Educational_program, educational_program => educational_program.id, {
        onDelete: "CASCADE", orphanedRowAction: 'delete'
    })
    educational_program_id: Educational_program;

    @ManyToOne(type => Users, users => users.id)
    user_id: Users;

    @Column({ length: 50, nullable: true, unique: true })
    title: string;

    @Column({ type: 'text', width: 1024, nullable: true })
    knowledge: string;

    @Column({ type: 'text', width: 1024, nullable: true })
    skills: string;

    @Column({ type: 'text', width: 1024, nullable: true })
    abilities: string;
}