"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleRoutes = void 0;
const express_1 = require("express");
const article_1 = require("../controller/article");
const route = express_1.Router();
route.get('/', async (req, res) => {
    try {
        const users = await article_1.getAllArticles();
        res.status(200).send(users);
    }
    catch (e) {
        res.status(500).send(e);
    }
});
// route.post('/', async(req, res) => {
//     try {
//         const user = await createArticle(req.body);
//         res.status(200).send(user);
//     } catch (e) {
//         res.status(500).send(e);
//     }
// })
route.patch('/:slug', async (req, res) => {
    try {
        const user = await article_1.updateArticle(req.body, req.params.slug);
        res.status(200).send(user);
    }
    catch (e) {
        res.status(500).send(e);
    }
});
route.delete('/:slug', async (req, res) => {
    try {
        const user = await article_1.deleteArticle(req.params.slug);
        res.status(200).send(user);
    }
    catch (e) {
        res.status(500).send(e);
    }
});
exports.articleRoutes = route;
