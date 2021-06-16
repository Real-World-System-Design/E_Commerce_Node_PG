"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitization = void 0;
async function sanitization(user) {
    if (user.password)
        delete user.password;
    return user;
}
exports.sanitization = sanitization;
