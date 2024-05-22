import { IsString } from 'class-validator';
export class CreateUserDto {
  @IsString()
  name: string;
  @IsString()
  email: string;
  @IsString()
  password: string;
  @IsString()
  role: string;
  @IsString()
  username: string;
  @IsString()
  ci: string;
  @IsString()
  expedition: string;
}
