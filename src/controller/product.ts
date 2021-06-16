import { getRepository } from "typeorm";
import { Product } from "../model/Product";

interface productData  {
    name: string
    price: number
    image: string
    description: string
}

interface productUpdateData  {
    name: string
    price: number
    image: string
    description: string
}
export async function getProductById(id: number): Promise<Product> {
    const repo = getRepository(Product);
    try {
        const product = await repo.findOne(id);
        if(!product) throw new Error('product with this id does not exists');
        return product;
    } catch (e) {
        throw e
    }
}

export async function registerProduct(data: productData): Promise<Product> {
    //validation
    const repo = getRepository(Product);
    try {
        const product = await repo.save(new Product(
            data.name,
            data.price,
            data.image,
            data.description
        ));
        return product;
    } catch (e) {
        throw e
    }
}

export async function updateProductDetails(data: productUpdateData, id: number): Promise<Product> {
    //validation
    const repo = getRepository(Product);
    try {
        const product = await repo.findOne(id);
        if(!product) throw new Error("product with this id does not exists");
        if(data.name) product.name = data.name;
        if(data.price) product.price = data.price;
        if(data.image) product.image = data.image;
        if(data.description) product.description = data.description;
        const updatedProduct = await repo.save(product);
        return updatedProduct;        
    } catch (e) {
        throw e
    }
}

export async function deleteProduct(id: number) {
    const repo = getRepository(Product);
    try {
        const product = await repo.findOne(id);
        if(!product) throw new Error("no product with this id exists");
        await repo.delete(product);
    } catch (e) {
        throw e
    }
}