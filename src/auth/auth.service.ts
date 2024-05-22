import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async register({
    username,
    email,
    password,
    name,
    ci,
    expedition,
    role,
  }: RegisterDto) {
    const user = await this.usersService.findOneByEmail(email);
    if (user) {
      throw new BadRequestException('User already exists');
    }
    return this.usersService.create({
      username,
      email,
      password: await bcrypt.hash(password, 10),
      name,
      ci,
      expedition,
      role,
    });
  }
  async login({ email, password }: LoginDto) {
    const user = await this.usersService.findOneByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { email: user.email, role: user.role };

    const token = await this.jwtService.sign(payload);

    return { token, email };
  }
  async profile({ email, role }: { email: string; role: string }) {
    // const user = await this.usersService.findOneByEmail(email);
    //     if (role !== 'admin') {
    //       throw new UnauthorizedException(
    //         'You are not authorized to access this route',
    //       );
    // }

    return await this.usersService.findOneByEmail(email);
  }
}
