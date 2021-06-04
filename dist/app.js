"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const Article_1 = require("./model/Article");
const User_1 = require("./model/User");
const allRoute_1 = require("./route/allRoute");
const app = express_1.default();
app.use(express_1.default.json());
app.use(allRoute_1.allRoutes);
app.get('/', (req, res) => {
    res.send("Hlw server is running");
});
async function start() {
    await typeorm_1.createConnection({
        type: 'postgres',
        username: 'conduit',
        password: 'conduit',
        database: 'conduit',
        synchronize: true,
        entities: [User_1.User, Article_1.Article],
        dropSchema: true,
        logging: true,
        logger: 'advanced-console'
    });
    app.listen(3000, () => console.log(`http://localhost:3000`));
}
start();
