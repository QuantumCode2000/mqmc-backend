import { Transform } from 'class-transformer';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @Transform(({ value }) => value.trim())
  @MinLength(5)
  @IsString()
  username: string;
  @IsEmail()
  email: string;
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(6)
  password: string;
  @Transform(({ value }) => value.trim())
  @IsString()
  role: string;
  @IsString()
  name: string;
  @IsString()
  ci: string;
  @IsString()
  expedition: string;
}
