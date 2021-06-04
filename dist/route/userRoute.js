"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const user_1 = require("../controller/user");
const route = express_1.Router();
route.get('/', async (req, res) => {
    try {
        const users = await user_1.getAllUsers();
        res.status(200).send(users);
    }
    catch (e) {
        res.status(500).send(e);
    }
});
route.post('/', async (req, res) => {
    try {
        const user = await user_1.registerUsers(req.body);
        res.status(200).send(user);
    }
    catch (e) {
        res.status(500).send(e);
    }
});
route.patch('/:email', async (req, res) => {
    try {
        const user = await user_1.updateUser(req.body, req.params.email);
        res.status(200).send(user);
    }
    catch (e) {
        res.status(500).send(e);
    }
});
route.delete('/:email', async (req, res) => {
    try {
        const user = await user_1.deleteUser(req.params.email);
        res.status(200).send(user);
    }
    catch (e) {
        res.status(500).send(e);
    }
});
exports.userRoutes = route;
