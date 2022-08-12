import { model, Schema } from 'mongoose';

interface IInventory {
  item: string,
  quantity: number,
  size: string, // objeto
  status: string,
}

const inventorySchema = new Schema<IInventory>({
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

const inventoryModel = model<IInventory>('Inventory', inventorySchema);
