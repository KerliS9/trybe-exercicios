import { Router } from 'express';
// import { StatusCodes } from 'http-status-codes';
import UserController from './controllers/userController';
// import ValidateBody from './middleware/validateBody';

const routersTypes = Router();

/* routersTypes.get('/', (req, res) => {
  res.status(StatusCodes.OK).send('Up and running');
}) */

routersTypes.get('/users', UserController.getAll);
routersTypes.post('/users', UserController.create);

export default routersTypes;