"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.loginUser = exports.registerUsers = exports.getUserByEmail = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../model/User");
const jwt_1 = require("../Utils/jwt");
const password_1 = require("../Utils/password");
const security_1 = require("../Utils/security");
async function getUserByEmail(email) {
    const repo = typeorm_1.getRepository(User_1.User);
    try {
        const user = await repo.findOne(email);
        if (!user)
            throw new Error("no user with this email exists");
        return await security_1.sanitization(user);
    }
    catch (e) {
        throw e;
    }
}
exports.getUserByEmail = getUserByEmail;
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
        return await security_1.sanitization(user);
    }
    catch (e) {
        throw e;
    }
}
exports.registerUsers = registerUsers;
async function loginUser(data) {
    //validation
    if (!data.email)
        throw new Error("email field is empty");
    if (!data.password)
        throw new Error("password field is empty");
    try {
        const repo = typeorm_1.getRepository(User_1.User);
        const user = await repo.findOne(data.email);
        if (!user)
            throw new Error("user with this email not found");
        const passMatch = await password_1.matchPass(data.password, user.password);
        if (!passMatch)
            throw new Error("wrong password");
        user.token = await jwt_1.sign(user);
        return await security_1.sanitization(user);
    }
    catch (e) {
        throw e;
    }
}
exports.loginUser = loginUser;
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
        return await security_1.sanitization(updatedUser);
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
