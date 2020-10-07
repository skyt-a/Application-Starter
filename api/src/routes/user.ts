import {NextFunction, Request, Response} from "express";
import {mysqlDriver} from '../app';
import { allUsers } from "../prisma";
const express = require('express');
const userRouter = express.Router();

/* GET users listing. */
userRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  allUsers()
  .then((result) =>  res.send(result))
  .catch((err) => res.send(err));
});

export default userRouter;