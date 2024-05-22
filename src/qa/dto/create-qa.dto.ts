/**
 * this is my entity
 * @Column({ primary: true, generated: true })
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
 */
import { IsString } from 'class-validator';

export class CreateQaDto {
  @IsString()
  question: string;

  @IsString()
  answer: string;

  @IsString()
  category: string;

  @IsString()
  video: string;

  @IsString()
  ageGroup: string;
}
