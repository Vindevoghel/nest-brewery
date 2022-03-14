import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BeerController } from './beer.controller';
import { Beer } from './beer.entity'
import { BeerService } from './beer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Beer])],
  controllers: [BeerController],
  providers: [BeerService]
})
export class BeerModule {}