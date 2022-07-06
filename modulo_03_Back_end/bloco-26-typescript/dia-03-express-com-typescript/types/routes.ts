import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const routersTypes = Router();

routersTypes.get('/', (req, res) => {
  res.status(StatusCodes.OK).send('Up and running');
})

export default routersTypes;