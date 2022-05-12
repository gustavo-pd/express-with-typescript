import { ResultSetHeader } from 'mysql2/promise';
import conn from '../database/connection';
import IUser from '../interfaces/user.interface';

export default class UserModel {

  public getAll = async (): Promise<IUser[]> => {
    const [users] = await conn.execute(
      'SELECT * FROM TypeScriptExpress.Users',
    );
    return users as IUser[];
  };

  public getOne = async (id: number): Promise<IUser> => {
    const result = await conn.execute(
      'SELECT * FROM TypeScriptExpress.Users WHERE id = ?', [id]
    )
    const [rows] = result;
    const [user] = rows as IUser[];
    return user;
  };

  public create = async (user: IUser): Promise<IUser> => {
    const { name, email, password } = user;
    const result = await conn.execute<ResultSetHeader>(
    'INSERT INTO TypeScriptExpress.Users (name, email, password) VALUES (?, ?, ?)',
    [name, email, password],
    );

    return { id: result[0].insertId, name, email, password };
  };
}