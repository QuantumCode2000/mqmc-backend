import { IsString, IsInt, IsPositive } from 'class-validator';
export class CreatePeopleDto {
  @IsString()
  nombre: string;
  @IsInt()
  @IsPositive()
  edad: number;
  @IsString()
  ci: string;
  @IsString()
  correo: string;
  @IsString()
  role: string;
}
