import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePeopleDto } from './dto/create-people.dto';
import { UpdatePeopleDto } from './dto/update-people.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { People } from './entities/people.entity';
import { Role } from 'src/roles/entities/role.entity';
@Injectable()
export class PeoplesService {
  constructor(
    @InjectRepository(People)
    private readonly peopleRepository: Repository<People>,

    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async create(createPeopleDto: CreatePeopleDto) {
    const role = await this.roleRepository.findOneBy({
      nombre: createPeopleDto.role,
    });
    if (!role) {
      throw new BadRequestException('Rol not found');
    }
    return this.peopleRepository.save({ ...createPeopleDto, role });
  }

  findAll() {
    // return `This action returns all peoples`;
    return this.peopleRepository.find();
  }

  findOne(id: number) {
    return this.peopleRepository.findOneBy({ id });
    // return `This action returns a #${id} people`;
  }

  update(id: number, updatePeopleDto: UpdatePeopleDto) {
    // return this.peopleRepository.update({ id }, updatePeopleDto);
    // return `This action updates a #${id} people`;
  }

  remove(id: number) {
    return this.peopleRepository.softDelete({ id });
    // return `This action removes a #${id} people`;
  }
}
