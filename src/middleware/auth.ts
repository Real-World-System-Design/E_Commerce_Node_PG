import {Request, Response, NextFunction} from 'express';
import { decode } from '../Utils/jwt';

export async function authByToken(req: Request ,res: Response, next: NextFunction) {
    const header = req.header('authorization')?.split(' ');
    if(!header) return res.status(401).send({
        err: "authorization failed"
    });

    if(header[0] !== "Token") res.status(400).send({
        err: "authorization failed token missing"
    });

    try {
        const token = header[1];
        const user = await decode(token);
        if(!user) throw new Error("user not found");
        (req as any).user = user;
        return next();
    } catch (e) {
        res.status(401).send({
            err: `Login failed ${e}`
        })
    }
    const token = header[1];
}