import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false, width: 20, type: 'text'})
    name: string

    @Column({default: 0, type: 'float'})
    price: number

    @Column({nullable: false})
    image: string

    @Column({width: 50, nullable: false, type: 'text'})
    description: string

    constructor(name: string, price: number, image: string, description: string){
        this.name = name
        this.price = price
        this.image = image
        this.description = description
    }

}