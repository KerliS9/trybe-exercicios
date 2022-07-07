import UserService from '../services/userService';
import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';

export default { 
  getAll: async (_req: Request, res: Response): Promise<Response> => {
    const users = await UserService.getAll();
    return res.status(StatusCodes.OK).json(users);
  },

  create: async (req: Request, res: Response): Promise<Response> => {
    console.log('controllers', req.url.slice(1));
    const user = await UserService.create(req.body);
    return res.status(StatusCodes.CREATED).json(user);
  }
};