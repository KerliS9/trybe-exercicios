import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { StatusCodes } from 'http-status-codes';
import { UserSchema } from '../shared/joiValidation';
import HttpException from '../shared/httpException';
// import IJoi from '../interfaces/joiInterface';

/* import { convertFromDirectory } from 'joi-to-typescript';

convertFromDirectory({
  schemaDirectory: './src/schemas',
  typeOutputDirectory: './src/interfaces',
  debug: true
});

import { convertSchema } from 'joi-to-typescript';
import { UserSchema } from '../shared/joiValidation';

const validateUser = (req: Request, _res: Response, next: NextFunction) => {
  const resultingInterface = convertSchema({}, UserSchema);
  resultingInterface?.content = req.body;
} */

/* export default {
  users: (req: Request, _res: Response, next: NextFunction) => {
    console.log('entrou');
    const validateEntry: string = req.method !== 'PUT' ? req.url.slice(1) : 'update';
    const { error } = joiDTO[validateEntry].validate(req.body);

    if(!error) return next();

    return next({ status: StatusCodes.BAD_REQUEST, message: error.details[0].message })
  } 
} */

export const validateObject = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = UserSchema.validate(req.body);
  console.log(error)
  if (error) {
    // const status = parseInt(error.status);
    throw new HttpException(error);
  }
  };