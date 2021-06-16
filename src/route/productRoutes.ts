import {Router} from "express";
import { deleteProduct, getProductById, registerProduct, updateProductDetails } from "../controller/product";
const route = Router();

route.get('/get/:id', async(req, res) => {
    try {
        const product = await getProductById((req as any).params.id);
        res.status(200).send(product);     
    } catch (e) {
        res.status(400).send({
            err: `error while getting the product ${e}`
        });
    }
});

route.post('/register', async(req, res) => {
    try {
        const product = await registerProduct((req as any).body);
        res.status(200).send(product);
    } catch (e) {
        res.status(400).send({
            err: `error while registering the product ${e}`
        });
    }
});

route.patch('/update/:id', async(req, res) => {
    try {
        const product = await updateProductDetails((req as any).body, (req as any).params.id);
        res.status(200).send(product);
    } catch (e) {
        res.status(400).send({
            err: `error while updating the product ${e}`
        });
    }
});

route.delete('/delete/:id', async(req, res) => {
    try {
        const product = await deleteProduct((req as any).params.id);
        res.status(200).send(product);
    } catch (e) {
        res.status(400).send({
            err: `error while deleting the product ${e}`
        });
    }
});
export const productRoute = route;