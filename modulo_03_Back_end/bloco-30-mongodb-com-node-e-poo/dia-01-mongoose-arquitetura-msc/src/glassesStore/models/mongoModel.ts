import IModel from '../interfaces/IModel';
import { isValidObjectId, Model } from 'mongoose';

abstract class MongoModel<T> implements IModel<T> {
  // atributos...
  protected _model:Model<T>;

  constructor(model:Model<T>) {
    this._model = model;
  }
  
  public async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }
  
  public async readOne(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error('InvalidMongoId');
    return this._model.findOne({ _id });
  }

  public async read(): Promise<T[]> {
    return this._model.find();
  }
  // métodos...
}

export default MongoModel;