import express, { Request, Response } from 'express';

const app = express();
require('dotenv').config();

// const errorMiddleware = require('./middlewares/error');
import usersRoutes from './routers/usersRoutes';

app.use(express.json());

app.get('/', (_request: Request, response: Response) => response.send({ status: 'OK' }));
app.use('/users', usersRoutes);

export default app;