"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authByToken = void 0;
const jwt_1 = require("../Utils/jwt");
async function authByToken(req, res, next) {
    var _a;
    const header = (_a = req.header('authorization')) === null || _a === void 0 ? void 0 : _a.split(' ');
    if (!header)
        return res.status(401).send({
            err: "authorization failed"
        });
    if (header[0] !== "Token")
        res.status(400).send({
            err: "authorization failed token missing"
        });
    try {
        const token = header[1];
        const user = await jwt_1.decode(token);
        if (!user)
            throw new Error("user not found");
        req.user = user;
        return next();
    }
    catch (e) {
        res.status(401).send({
            err: `Login failed ${e}`
        });
    }
    const token = header[1];
}
exports.authByToken = authByToken;
