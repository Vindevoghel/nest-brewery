import { Module } from '@nestjs/common';
import { BeerController } from './beer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Beer } from './beer.entity'
import { BeerService } from './beer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Beer])],
  controllers: [BeerController],
  providers: [BeerService]
})
export class BeerModule {}