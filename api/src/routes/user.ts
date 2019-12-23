import {NextFunction, Request, Response} from "express";
import {mysqlDriver} from '../app';
const express = require('express');
const userRouter = express.Router();

/* GET users listing. */
userRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  mysqlDriver.query('select count(*) from users;')
  .then((result) =>  res.send(result))
  .catch((err) => res.send(err));
});

export default userRouter;