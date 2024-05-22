import { Role } from 'src/roles/entities/role.entity';
import { Column, ManyToOne, Entity, DeleteDateColumn } from 'typeorm';
@Entity()
export class People {
  //  @PrimaryGeneratedColumn()
  @Column({ primary: true, generated: true })
  id: number;
  @Column()
  nombre: string;
  @Column()
  edad: number;
  @Column()
  ci: string;
  @Column()
  correo: string;
  @DeleteDateColumn()
  deletedAt: Date;
  @ManyToOne(() => Role, (role) => role.id, {
    eager: true,
  })
  role: Role;
}
