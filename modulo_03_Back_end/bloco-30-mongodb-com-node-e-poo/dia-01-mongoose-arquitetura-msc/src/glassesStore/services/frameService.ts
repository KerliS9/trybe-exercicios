import IService from '../interfaces/IService';
import IFrame, { FrameZodSchema } from '../interfaces/frame';
import IModel from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class FrameService implements IService<IFrame> {
  // private _frame:IModel<IFrame>;
  constructor(private model:IModel<IFrame>) { }

  public async create(obj:IFrame):Promise<IFrame> {
    const parsed = FrameZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error; // vamos falar sobre como esse erro tratá-lo logo logo
    }
    return this.model.create(obj);
  }

  public async readOne(_id:string):Promise<IFrame> {
    const frame = await this.model.readOne(_id);
    if (!frame) throw new Error(ErrorTypes.EntityNotFound);
    return frame;
  }

  public async read():Promise<IFrame[]> {
    const frames = await this.model.read();
    return frames;
  }

  public async destroy(_id: string): Promise<string> {
    const frame = await this.model.readOne(_id);
    if (!frame) throw new Error(ErrorTypes.EntityNotFound);
    await this.model.destroy(_id);
    return 'Frame deleted';
  }
}

export default FrameService;