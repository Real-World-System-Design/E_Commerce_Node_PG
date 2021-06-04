import {Router} from 'express';
import {userRoutes} from './userRoute';
const route = Router();

route.use('/users', userRoutes);

export const allRoutes = route;