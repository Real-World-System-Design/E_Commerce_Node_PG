import express from 'express';
import { createConnection } from 'typeorm';
import { User } from './model/User';
import {allRoutes} from './route/allRoute';
const app = express();

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
        entities: [User],
        dropSchema: true,
        logging: true,
        logger: 'advanced-console'
    })
    app.listen(3000, () => console.log(`http://localhost:3000`));
}
start();