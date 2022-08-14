import { Router } from 'express';
import routeFrame from './routeFrames';

const routes = Router();

routes.use(routeFrame);

export default routes;