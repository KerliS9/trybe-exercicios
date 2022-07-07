import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import joiDTO from '../shared/joiValidation';
// import IJoi from '../interfaces/joiInterface';

export default {
  users: (req: Request, _res: Response, next: NextFunction) => {
    console.log('entrou');
    const validateEntry: string = req.method !== 'PUT' ? req.url.slice(1) : 'update';
    const { error } = joiDTO[validateEntry].validate(req.body);

    if(!error) return next();

    return next({ status: StatusCodes.BAD_REQUEST, message: error.details[0].message })
  } 
}