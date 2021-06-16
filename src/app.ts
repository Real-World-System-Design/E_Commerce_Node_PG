import express from 'express';
import { createConnection } from 'typeorm';
import { Product } from './model/Product';
import { User } from './model/User';
import {allRoutes} from './route/allRoute';
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json() as any);

app.use(allRoutes);

app.get('/', (req, res) => {
    res.send("Hlw server is running")
});

async function start() {
    await createConnection({
        type: 'postgres',
        username: 'product',
        password: 'product',
        database: 'product',
        synchronize: true,
        entities: [User, Product],
        dropSchema: true,
        logging: true,
        logger: 'advanced-console'
    })
    app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
}
start();