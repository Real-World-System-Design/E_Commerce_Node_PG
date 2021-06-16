import { User } from "../model/User";
import * as jwt from 'jsonwebtoken';

const secret = process.env.SECRET || "This-is-a-very-very-secret";

export async function sign(user: User): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        jwt.sign({
            username: user.username,
            emia: user.email
        }, secret, (err: any, encoded: undefined | string) => {
            if(err) throw reject(err)
            return resolve(encoded as string);
        });
    });    
};

export async function decode(token: string): Promise<User> {
    return new Promise<User>((resolve, reject) => {
        jwt.verify(token, secret, (err, decoded) => {
            if(err) throw reject(err)
            return resolve(decoded as User);
        });
    });
};