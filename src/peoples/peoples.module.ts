import { Module } from '@nestjs/common';
import { PeoplesService } from './peoples.service';
import { PeoplesController } from './peoples.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { People } from './entities/people.entity';
import { RolesModule } from 'src/roles/roles.module';
import { RolesService } from 'src/roles/roles.service';
@Module({
  imports: [TypeOrmModule.forFeature([People]), RolesModule],
  controllers: [PeoplesController],
  providers: [PeoplesService, RolesService],
})
export class PeoplesModule {}
