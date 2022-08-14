import { Router } from 'express';
import FrameController from '../controller/frameController';
import FrameModel from '../models/frame';
import FrameService from '../services/frameService';

const routeFrame = Router();

const frame = new FrameModel();
const frameService = new FrameService(frame);
const frameController = new FrameController(frameService);

routeFrame.post('/frame', (req, res) => frameController.create(req, res));
routeFrame.get('/frame/:id', (req, res) => frameController.readOne(req, res));


export default routeFrame;