import UserModel from "../models/UserModel";
import IUser from "../interfaces/user.interface";

export default class UserService {
  public model = new UserModel();

  public getAll = async (): Promise<IUser[]> => {
    const users = await this.model.getAll();
    return users;
  };

  public getOne = async (id: number): Promise<IUser> => {
    const user = await this.model.getOne(id);
    return user;
  };

  public create = async (user: IUser): Promise<IUser> => {
    const { name, email, password } = user;
    const newUser = await this.model.create({ name, email, password });
    return newUser;
  };
}