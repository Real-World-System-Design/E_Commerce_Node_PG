import {Router} from 'express';
import { deleteUser, getUserByEmail, loginUser, registerUsers, updateUser } from '../controller/user';
import { authByToken } from '../middleware/auth';

const route = Router();

route.get('/get/:id', async(req, res) => {
    try {
        const users = await getUserByEmail((req as any).params.id);
        res.status(200).send(users); 
    } catch (e) {
        res.status(500).send({
            err: `error while getting the user ${e}`
        });
    }
});

route.post('/login', async(req, res) => {
    try {
        const user = await loginUser(req.body);
        res.status(200).send(user);
    } catch (e) {
        res.status(500).send({
            err: `error while creating the user ${e}`
        });
    }
});

route.post('/register', async(req, res) => {
    try {
        const user = await registerUsers(req.body);
        res.status(200).send(user);
    } catch (e) {
        res.status(500).send({
            err: `error while creating the user ${e}`
        });
    }
});

route.patch('/update/:email', async(req, res) =>{
    try {
        const user = await updateUser(req.body, req.params.email);
        res.status(200).send(user);
    } catch (e) {
        res.status(500).send({
            err: `error while updating the user ${e}`
        });
    }
})

route.delete('/:email', async(req, res) => {
    try {
        const user = await deleteUser(req.params.email);
        res.status(200).send(user);
    } catch (e) {
        res.status(500).send({
            err: `error while deleting the user ${e}`
        });
    }
})

export const userRoutes = route;