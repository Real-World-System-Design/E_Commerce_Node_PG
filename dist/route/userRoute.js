"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const user_1 = require("../controller/user");
const route = express_1.Router();
route.get('/get/:id', async (req, res) => {
    try {
        const users = await user_1.getUserByEmail(req.params.id);
        res.status(200).send(users);
    }
    catch (e) {
        res.status(500).send({
            err: `error while getting the user ${e}`
        });
    }
});
route.post('/login', async (req, res) => {
    try {
        const user = await user_1.loginUser(req.body);
        res.status(200).send(user);
    }
    catch (e) {
        res.status(500).send({
            err: `error while creating the user ${e}`
        });
    }
});
route.post('/register', async (req, res) => {
    try {
        const user = await user_1.registerUsers(req.body);
        res.status(200).send(user);
    }
    catch (e) {
        res.status(500).send({
            err: `error while creating the user ${e}`
        });
    }
});
route.patch('/update/:email', async (req, res) => {
    try {
        const user = await user_1.updateUser(req.body, req.params.email);
        res.status(200).send(user);
    }
    catch (e) {
        res.status(500).send({
            err: `error while updating the user ${e}`
        });
    }
});
route.delete('/:email', async (req, res) => {
    try {
        const user = await user_1.deleteUser(req.params.email);
        res.status(200).send(user);
    }
    catch (e) {
        res.status(500).send({
            err: `error while deleting the user ${e}`
        });
    }
});
exports.userRoutes = route;
