import { Entity, Column, OneToMany } from 'typeorm';
import { People } from 'src/peoples/entities/people.entity';
@Entity()
export class Role {
  // @PrimaryGeneratedColumn()
  @Column({ primary: true, generated: true })
  id: number;
  @Column()
  nombre: string;
  @Column()
  descripcion: string;
  @OneToMany(() => People, (people) => people.role)
  peoples: People[];
}
