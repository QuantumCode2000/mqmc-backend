// // import { Injectable, NotFoundException } from '@nestjs/common';
// // import { CreateUserDto } from './dto/create-user.dto';
// // import { UpdateUserDto } from './dto/update-user.dto';
// // import { User } from './entities/user.entity';
// // import { Repository } from 'typeorm';
// // import { InjectRepository } from '@nestjs/typeorm';
// // @Injectable()
// // export class UsersService {
// //   constructor(
// //     @InjectRepository(User)
// //     private readonly userRepository: Repository<User>,
// //   ) {}

// //   create(createUserDto: CreateUserDto) {
// //     return this.userRepository.save(createUserDto);
// //   }

// //   findOneByEmail(email: string) {
// //     return this.userRepository.findOneBy({ email });
// //   }

// //   findAll() {
// //     // return `This action returns all users`;
// //     return this.userRepository.find();
// //   }

// //   findOne(id: number) {
// //     return `This action returns a #${id} user`;
// //   }

// //   update(id: number, updateUserDto: UpdateUserDto) {
// //     return `This action updates a #${id} user`;
// //   }

// //   remove(id: number) {
// //     return `This action removes a #${id} user`;
// //   }
// //   async updateStatusByCi(ci: string, status: boolean): Promise<User> {
// //     const user = await this.userRepository.findOneBy({ ci });
// //     if (!user) {
// //       throw new NotFoundException(`User with ci ${ci} not found`);
// //     }
// //     user.status = status;
// //     return await this.userRepository.save(user);
// //   }
// // }

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findOneByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }

  async updateStatusByCi(ci: string, status: boolean): Promise<User> {
    const user = await this.userRepository.findOneBy({ ci });
    if (!user) {
      throw new NotFoundException(`User with ci ${ci} not found`);
    }
    user.status = status;
    return await this.userRepository.save(user);
  }

  async updateByEmail(
    email: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const user = await this.userRepository.findOneBy({ email });
    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }
    return await this.userRepository.save({ ...user, ...updateUserDto });
  }
}
