import { model as mongooseCreateModel, Schema } from 'mongoose';
import IFrame from '../interfaces/frame';
import MongoModel from './mongoModel';

const frameMongooseSchema = new Schema<IFrame>({
  material: String,
  color: String,
}); // , { versionKey: false }
// usar este segundo parâmetro se a implantação ocorrer com options no connectToDatabase?

class Frame extends MongoModel<IFrame> {
  constructor(model = mongooseCreateModel('Frame', frameMongooseSchema)) {
    super(model);
  }
}

export default Frame;