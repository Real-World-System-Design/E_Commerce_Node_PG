import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("users")
export class User{
    @PrimaryColumn()
    email: string

    @Column({type: 'text'})
    username: string

    @Column({type: 'text', nullable: true})
    password?: string

    constructor(username: string, email: string, password: string){
        this.email = email,
        this.password = password,
        this.username = username
    }
}