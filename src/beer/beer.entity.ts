import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity("Beer")
export class Beer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    beerName: string;

    @Column({ type: "float" })
    ABV: number;
}