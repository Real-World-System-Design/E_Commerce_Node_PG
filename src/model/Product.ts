import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

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

    @ManyToOne(() => User)
    manufacturer: User

    constructor(name: string, price: number, image: string, description: string, manufacturer: User){
        this.name = name
        this.price = price
        this.image = image
        this.description = description
        this.manufacturer = manufacturer
    }

}