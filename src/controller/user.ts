import { getRepository } from "typeorm";
import { User } from "../model/User";
import { hashPass } from "../Utils/password";
import { sanitization } from "../Utils/security";

interface registerData{
    username: string,
    password: string,
    email:string
}

interface updateData{
    username: string,
    password: string,
    email:string
}

export async function getUserById(email: string): Promise<User> {
    const repo = getRepository(User);
    try {
        const user = await repo.findOne(email);
        if(!user) throw new Error("no user with this email exists"); 
        return await sanitization(user);
    } catch (e) {
        throw e;
    }
}


export async function registerUsers(data: registerData):Promise<User> {
    //validation
    if(!data.email) throw new Error("email field is empty");
    if(!data.password) throw new Error("password field is empty");
    if(!data.username) throw new Error("username field is empty");
    
    try {
        const repo = getRepository(User);
        const user = await repo.save(new User(
            data.username,
            data.email,
            await hashPass(data.password)
        ));

        return await sanitization(user);
    } catch (e) {
        throw e
    }
}

// export async function loginUser(): Promise<User> {
    
// }

export async function updateUser(data: updateData, email: string): Promise<User> {

    try {
        const repo = getRepository(User);

        const user = await repo.findOne(email);
        if(!user) throw new Error("no user found");

        if(data.email) user.email = data.email;
        if(data.username) user.username = data.username;
        if(data.password) user.password = await hashPass(data.password);
        
        const updatedUser = await repo.save(user);
        return await sanitization(updatedUser);
    } catch (e) {
        throw e;
    }
}

export async function deleteUser(email: string) {
    try {
        const repo = getRepository(User)
        const user = await repo.findOne(email);

        if(!user) throw new Error("no user found");

        repo.delete(user);
    } catch (e) {
        throw e;
    }
}