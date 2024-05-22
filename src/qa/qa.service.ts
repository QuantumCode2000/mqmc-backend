import { Injectable } from '@nestjs/common';
import { CreateQaDto } from './dto/create-qa.dto';
import { UpdateQaDto } from './dto/update-qa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Qa } from './entities/qa.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QaService {
  constructor(
    @InjectRepository(Qa)
    private readonly qaRepository: Repository<Qa>,
  ) {}
  create(createQaDto: CreateQaDto) {
    return this.qaRepository.save(createQaDto);
    // return 'This action adds a new qa';
  }

  findAll() {
    return this.qaRepository.find();
    // return `This action returns all qa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} qa`;
  }

  update(id: number, updateQaDto: UpdateQaDto) {
    return `This action updates a #${id} qa`;
  }

  remove(id: number) {
    return `This action removes a #${id} qa`;
  }
}
