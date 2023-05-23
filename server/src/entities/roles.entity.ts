import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from './Users.entity';

@Entity()
class Roles {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Users, users => users.role)
    user_id: Users[];

    @Column()
    permissions: string;
}

export default Roles;