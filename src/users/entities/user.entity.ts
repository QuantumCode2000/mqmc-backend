import {
  PrimaryGeneratedColumn,
  Entity,
  DeleteDateColumn,
  Column,
} from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  ci: string;
  @Column()
  expedition: string;
  @Column()
  role: string;
  @Column({ unique: true, nullable: true })
  email: string;
  @Column({
    nullable: true,
  })
  password: string;
  @Column()
  username: string;
  @Column({
    default: true,
  })
  status: boolean;
  @Column({
    default: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
  })
  imgProfile: string;
  @DeleteDateColumn()
  deletedAt: Date;
}
