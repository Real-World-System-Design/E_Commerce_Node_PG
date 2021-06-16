"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProductDetails = exports.registerProduct = exports.getProductById = void 0;
const typeorm_1 = require("typeorm");
const Product_1 = require("../model/Product");
async function getProductById(id) {
    const repo = typeorm_1.getRepository(Product_1.Product);
    try {
        const product = await repo.findOne(id);
        if (!product)
            throw new Error('product with this id does not exists');
        return product;
    }
    catch (e) {
        throw e;
    }
}
exports.getProductById = getProductById;
async function registerProduct(data) {
    //validation
    const repo = typeorm_1.getRepository(Product_1.Product);
    try {
        const product = await repo.save(new Product_1.Product(data.name, data.price, data.image, data.description));
        return product;
    }
    catch (e) {
        throw e;
    }
}
exports.registerProduct = registerProduct;
async function updateProductDetails(data, id) {
    //validation
    const repo = typeorm_1.getRepository(Product_1.Product);
    try {
        const product = await repo.findOne(id);
        if (!product)
            throw new Error("product with this id does not exists");
        if (data.name)
            product.name = data.name;
        if (data.price)
            product.price = data.price;
        if (data.image)
            product.image = data.image;
        if (data.description)
            product.description = data.description;
        const updatedProduct = await repo.save(product);
        return updatedProduct;
    }
    catch (e) {
        throw e;
    }
}
exports.updateProductDetails = updateProductDetails;
async function deleteProduct(id) {
    const repo = typeorm_1.getRepository(Product_1.Product);
    try {
        const product = await repo.findOne(id);
        if (!product)
            throw new Error("no product with this id exists");
        await repo.delete(product);
    }
    catch (e) {
        throw e;
    }
}
exports.deleteProduct = deleteProduct;
