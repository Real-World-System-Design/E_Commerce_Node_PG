"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchPass = exports.hashPass = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const saltRounds = 10;
async function hashPass(password) {
    return new Promise((resolve, reject) => {
        bcrypt_1.default.hash(password, saltRounds, (err, encrypted) => {
            if (err)
                throw reject(err);
            resolve(encrypted);
        });
    });
}
exports.hashPass = hashPass;
;
async function matchPass(password, hash) {
    return new Promise((resolve, reject) => {
        bcrypt_1.default.compare(password, hash, (err, same) => {
            if (err)
                throw reject(err);
            resolve(same);
        });
    });
}
exports.matchPass = matchPass;
