"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoute = void 0;
const express_1 = require("express");
const product_1 = require("../controller/product");
const auth_1 = require("../middleware/auth");
const route = express_1.Router();
route.get('/get/:id', async (req, res) => {
    try {
        const product = await product_1.getProductById(req.params.id);
        res.status(200).send(product);
    }
    catch (e) {
        res.status(400).send({
            err: `error while getting the product ${e}`
        });
    }
});
route.post('/register', auth_1.authByToken, async (req, res) => {
    try {
        const product = await product_1.registerProduct(req.body, req.user.email);
        res.status(200).send(product);
    }
    catch (e) {
        res.status(400).send({
            err: `error while registering the product ${e}`
        });
    }
});
route.patch('/update/:id', async (req, res) => {
    try {
        const product = await product_1.updateProductDetails(req.body, req.params.id);
        res.status(200).send(product);
    }
    catch (e) {
        res.status(400).send({
            err: `error while updating the product ${e}`
        });
    }
});
route.delete('/delete/:id', async (req, res) => {
    try {
        const product = await product_1.deleteProduct(req.params.id);
        res.status(200).send(product);
    }
    catch (e) {
        res.status(400).send({
            err: `error while deleting the product ${e}`
        });
    }
});
exports.productRoute = route;
