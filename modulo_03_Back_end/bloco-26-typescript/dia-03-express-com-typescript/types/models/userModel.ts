import { ResultSetHeader } from "mysql2";
import Connection from './connection';
import UserInterface from '../interfaces/userInterface';

export default { 
  getAll: async (): Promise<UserInterface[]> => {
    const query = 'SELECT * FROM Users';
    const [result] = await Connection.execute(query);
    return result as UserInterface[];
  },

  create: async (user: UserInterface): Promise<ResultSetHeader> => {
    const { name, email, password } = user;
    const query = 'INSERT INTO Users (name, email, password) values(?, ?, ?)';
    const [result] = await Connection.execute<ResultSetHeader>(query, [name, email, password]);
    return result;
  } 
};