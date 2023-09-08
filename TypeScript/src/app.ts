import express from 'express';
import UserRouter from './routers/user';
import {Request,Response} from 'express';
const app = express();



app.use('/user',UserRouter);



app.listen(process.env.PORT);