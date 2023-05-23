import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { List_of_disciplines } from './list_of_disciplines.entity';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    // @OneToMany(type => List_of_disciplines, list_of_disciplines => list_of_disciplines.user_id)
    id: number;

    @Column({ unique: true })
    login: string;

    @Column()
    password: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    role: string;
}