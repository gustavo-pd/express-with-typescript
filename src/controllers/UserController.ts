import UserService from "../services/UserService";
import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

export default class UserController {
  public service = new UserService();
  
  public getAll = async (req: Request, res: Response, _next: NextFunction): Promise<Response> => {
    const users = await this.service.getAll();
    return res.status(StatusCodes.OK).json(users);
  }

  public getOne = async (req: Request, res: Response, _next: NextFunction): Promise<Response> => {
    const id = parseInt(req.params.id);
    const user = await this.service.getOne(id)

    if (!user) {
      return res.status(StatusCodes.NOT_FOUND)
        .json({ message: 'User not found!'});
    }

    return res.status(StatusCodes.OK).json(user);
  }

  public create = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const { name, email, password } = req.body;
    try {
      const user = await this.service.create({ name, email, password });
      return res.status(StatusCodes.CREATED).json(user);
    } catch (error: unknown) {
      if (error instanceof Error && error.message.includes('Product already exists')) {
        return res.status(StatusCodes.CONFLICT).json({ message: error.message });
      }
      next(error);
    }  
  } 
}