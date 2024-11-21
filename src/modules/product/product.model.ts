import { model, Schema } from 'mongoose';
import { Product } from './product.interface';

enum BicycleType {
  Mountain = 'Mountain',
  Road = 'Road',
  Hybrid = 'Hybrid',
  BMX = 'BMX',
  Electric = 'Electric',
}

const productSchema = new Schema<Product>(
  {
    // id: { type: String },
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    type: {
      type: String,
      enum: Object.values(BicycleType),
      required: true,
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0 },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const ProductModel = model<Product>('Product', productSchema);
