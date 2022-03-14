import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { Beer } from './beer.entity';
import { BeerDto } from './beer.dto';

@Injectable()
export class BeerService {
    constructor(
        @InjectRepository(Beer)
        private beerRepository: Repository<Beer>
    ) { }


    public beers: BeerDto[] = [];

    /**
    * 
    * @returns Array of all available beers
    */
    async findAll(): Promise<BeerDto[]> {
        return await this.beerRepository.find();
    }



    /** 
    * @param ABV @Float ABV Alcohol Percentage
    * 
    * @returns Array All Beers with that specific ABV
    */
    async findByABV(ABV: Number): Promise<BeerDto[]> {
        return await this.beerRepository.find({ where: { ABV: ABV } })
    }


    /**
   * 
   * @param minABV @Float minABV Alcohol Percentage
   *
   * @param maxABV @Float maxABV Alcohol Percentage
   * 
   * @returns Promise<Beer[]> Returns an array with all beers with an ABV between minABV and maxABV 
   */
    async findByABVRange(minABV: Number, maxABV: Number): Promise<BeerDto[]> {
        return await this.beerRepository.find({ where: { ABV: Between(minABV, maxABV) } })
    }


    /**
    * 
    * @param beerData 
    * @returns 
    */

    async create(beer: BeerDto): Promise<BeerDto> {
        return await this.beerRepository.save(beer);
    }
}
