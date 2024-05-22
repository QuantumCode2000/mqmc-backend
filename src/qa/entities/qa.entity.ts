import { Entity, Column } from 'typeorm';
@Entity()
export class Qa {
  // @PrimaryGeneratedColumn()
  @Column({ primary: true, generated: true })
  id: number;
  @Column()
  question: string;
  @Column()
  answer: string;
  @Column()
  category: string;
  @Column()
  video: string;
  @Column()
  ageGroup: string;
}
