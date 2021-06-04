"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.registerUsers = exports.getAllUsers = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../model/User");
const password_1 = require("../Utils/password");
async function getAllUsers() {
    const repo = typeorm_1.getRepository(User_1.User);
    const users = await repo.find();
    return users;
}
exports.getAllUsers = getAllUsers;
async function registerUsers(data) {
    //validation
    if (!data.email)
        throw new Error("email field is empty");
    if (!data.password)
        throw new Error("password field is empty");
    if (!data.username)
        throw new Error("username field is empty");
    try {
        const repo = typeorm_1.getRepository(User_1.User);
        const user = await repo.save(new User_1.User(data.username, data.email, await password_1.hashPass(data.password)));
        return user;
    }
    catch (e) {
        throw e;
    }
}
exports.registerUsers = registerUsers;
// export async function loginUser(): Promise<User> {
// }
async function updateUser(data, email) {
    try {
        const repo = typeorm_1.getRepository(User_1.User);
        const user = await repo.findOne(email);
        if (!user)
            throw new Error("no user found");
        if (data.email)
            user.email = data.email;
        if (data.username)
            user.username = data.username;
        if (data.password)
            user.password = await password_1.hashPass(data.password);
        const updatedUser = await repo.save(user);
        return (updatedUser);
    }
    catch (e) {
        throw e;
    }
}
exports.updateUser = updateUser;
async function deleteUser(email) {
    try {
        const repo = typeorm_1.getRepository(User_1.User);
        const user = await repo.findOne(email);
        if (!user)
            throw new Error("no user found");
        repo.delete(user);
    }
    catch (e) {
        throw e;
    }
}
exports.deleteUser = deleteUser;
