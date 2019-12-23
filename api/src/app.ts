import bodyParser from "body-parser";
import express from "express";
import http from "http";
import MysqlDriver from "./drivers/mysql-driver";
import userRouter from './routes/user';
import graphql from "./graphql";
const cors = require('cors')
require('dotenv').config();

const port = process.env.PORT || 3000;
const app = express();  
export const mysqlDriver = new MysqlDriver();
    
app.on("ready", () => {
    app.listen(port, () => {
        console.log("ready");
    });
});
// Node.jsの外部からアプリが終了したときにMySQLドライバーをcloseするための記述
// process APIでUNIXが発行するシグナルに対応した処理を呼び出すことができる
// SIGTERMはkillでアプリを終了されるシグナル
// SIGINTはCtrl+Cでアプリが終了されるシグナル
process.on("SIGTERM", beforeExit);
process.on("SIGINT", beforeExit);

async function beforeExit() {
    if (!mysqlDriver.isConnected) {
        return;
    }
    await mysqlDriver.close();
}

http.createServer(app);

init().then(() => app.emit("ready"));

async function init() {
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use("/graphql", (req, res) => graphql(mysqlDriver)(req, res));
    app.use('/users', userRouter);

    console.log(process.env);

    await mysqlDriver.open({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASS,
        port: parseInt(process.env.DB_PORT as string),
    });
}