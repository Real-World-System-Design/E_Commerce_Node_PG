import {Router} from 'express';
import { deleteUser, getAllUsers, registerUsers, updateUser } from '../controller/user';

const route = Router();

route.get('/', async(req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).send(users); 
    } catch (e) {
        res.status(500).send(e);
    }
});

route.post('/', async(req, res) => {
    try {
        const user = await registerUsers(req.body);
        res.status(200).send(user);
    } catch (e) {
        res.status(500).send(e);
    }
})

route.patch('/:email', async(req, res) =>{
    try {
        const user = await updateUser(req.body, req.params.email);
        res.status(200).send(user);
    } catch (e) {
        res.status(500).send(e);
    }
})

route.delete('/:email', async(req, res) => {
    try {
        const user = await deleteUser(req.params.email);
        res.status(200).send(user);
    } catch (e) {
        res.status(500).send(e);
    }
})

export const userRoutes = route;