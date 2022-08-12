import { Schema } from 'mongoose';

interface IInventory {
  item: string,
  quantity: number,
  size: string, // objeto
  status: string,
}

const bookSchema = new Schema<IInventory>({
  item: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  }
});