import {Router} from 'express';
import {userRoutes} from './userRoute';
import {productRoute} from './productRoutes';
const route = Router();

route.use('/users', userRoutes);
route.use('/product', productRoute);

export const allRoutes = route;