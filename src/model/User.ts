import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity("users")
export class User{
    @PrimaryColumn()
    email: string

    @Column({type: 'text'})
    username: string

    @Column({type: 'text', nullable: true})
    password?: string

    token: string

    @CreateDateColumn({type: 'date'})
    createdAt: Date

    @UpdateDateColumn({type: 'text'})
    updatedAt: Date

    constructor(username: string, email: string, password: string){
        this.email = email,
        this.password = password,
        this.username = username
    }
}