import { model, Schema } from 'mongoose';

interface IInventory {
  item: string,
  quantity: number,
  size: { h: number, w: number, uom: string }, // objeto
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
    h: { type: Number, required: true },
    w: { type: Number, required: true },
    uom: { type: String, required: true },
  },
  status: {
    type: String,
    required: true,
  }
});

const inventoryModel = model<IInventory>('Inventory', inventorySchema);
