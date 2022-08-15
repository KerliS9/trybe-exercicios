import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import IFrame from '../interfaces/frame';

interface RequestIFrame extends Request {
  body: IFrame,
}

export default class FrameController {
  constructor(private _service: IService<IFrame>) { }

  public async create(
    req: RequestIFrame, 
    res: Response<IFrame>,
  ) {
    const { material, color } = req.body;
    const frame = { material, color };
    const results = await this._service.create(frame);
    return res.status(201).json(results);
  }

  public async readOne(
    req: Request,
    res: Response<IFrame>,
  ) {
    const result = await this._service.readOne(req.params.id);
    return res.status(200).json(result);
  }

  public async read(_req: Request, res: Response<IFrame[]>) {
    const frames = await this._service.read();
    return res.status(200).json(frames);
  }

  public async destroy(req: Request, res: Response<IFrame>) {
    const frame = await this._service.destroy(req.params.id);
    return res.status(200).json(frame);
  }

  public async update(req: Request, res: Response<IFrame>) {
    // await this.readOne(_id);
    const frame = await this._service.update(req.params.id, req.body);
    return res.status(200).json(frame);
  }
}