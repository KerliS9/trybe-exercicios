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
routeFrame.get('/frame', (req, res) => frameController.read(req, res));

routeFrame.delete('/frame/:id', (req, res) => frameController.destroy(req, res));
routeFrame.put('/frame/:id', (req, res) => frameController.update(req, res));


export default routeFrame;