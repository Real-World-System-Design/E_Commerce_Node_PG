import bcrypt from 'bcrypt';

const saltRounds = 10;

export async function hashPass(password: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        bcrypt.hash(password, saltRounds, (err, encrypted) => {
            if(err) throw reject(err)
            resolve(encrypted);
        });
    });
};

export async function matchPass(password: string, hash: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        bcrypt.compare(password, hash, (err, same) => {
            if(err) throw reject(err)
            resolve(same);
        })
    })
}