import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BeerService } from './beer.service';
import { BeerDto } from './beer.dto';

@Controller('api')
export class BeerController {
    constructor(private beerService: BeerService) { }

    /**
         * 
         * @returns Array of all available beers
         */
    @Get('/get')
    findAll(): Promise<BeerDto[]> {
        return this.beerService.findAll();
    }


    /**
     * 
     * @param beer 
     * @returns creates new beer
     */
    @Post('/create')
    create(@Body() beer: BeerDto): Promise<BeerDto> {
        return this.beerService.create(beer)
    }

    /**
    * 
    * @param ABV @Float ABV Alcohol Percentage
    * 
    * @returns Array All Beers with that specific ABV
    */
    @Get('/get/ABV=:ABV')
    async findByABV(@Param('ABV') ABV: number): Promise<BeerDto[]> {
        return this.beerService.findByABV(ABV);
    }


    /**
    * 
    * @param minABV @Float minABV Alcohol Percentage
    *
    * @param maxABV @Float maxABV Alcohol Percentage
    * 
    * @returns Promise<Beer[]> Returns an array with all beers with an ABV between minABV and maxABV 
    */

    @Get('/get/minABV=:minABV&maxABV=:maxABV')
    async findByABVRange(@Param('minABV') minABV: number, @Param('maxABV') maxABV: number): Promise<BeerDto[]> {
        return this.beerService.findByABVRange(minABV, maxABV);
    }

}
