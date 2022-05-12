import { Router } from 'express';
import UserController from '../controllers/UserController';

const userController = new UserController()

const route = Router();

route.get('/', userController.getAll);

route.get('/:id', userController.getOne);

route.post ('/', userController.create);

export default route;