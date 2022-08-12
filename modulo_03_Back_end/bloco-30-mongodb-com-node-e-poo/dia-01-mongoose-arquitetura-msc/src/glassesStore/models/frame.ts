import { model as mongooseCreateModel, Schema } from 'mongoose';
import IFrame from '../interfaces/frame';
import MongoModel from './mongoModel';

const frameMongooseSchema = new Schema<IFrame>({
  material: String,
  color: String,
});

class Frame extends MongoModel<IFrame> {
  constructor(model = mongooseCreateModel('Frame', frameMongooseSchema)) {
    super(model);
  }
}

export default Frame;