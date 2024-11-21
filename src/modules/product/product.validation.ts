import { z } from 'zod';

// Enum for Bicycle Types
export enum BicycleType {
  Mountain = 'Mountain',
  Road = 'Road',
  Hybrid = 'Hybrid',
  BMX = 'BMX',
  Electric = 'Electric',
}

// Zod validation schema for Product
export const ProductSchema = z.object({
  name: z
    .string()
    .min(10, 'Name must be at least 10 characters long')
    .max(100, 'Name must not be longer than 100 characters')
    .trim(),

  brand: z
    .string()
    .min(5, 'Brand name must be at least 100 characters long')
    .max(50, 'Brand name must not be longer than 50 characters')
    .trim(),

  price: z
    .number()
    .positive('Price must be a positive number')
    .min(1, 'Price must be at least 1')
    .max(10000, 'Price must be less than 10000'),

  type: z
    .enum([
      BicycleType.Mountain,
      BicycleType.Road,
      BicycleType.Hybrid,
      BicycleType.BMX,
      BicycleType.Electric,
    ])
    .refine(
      (val) => Object.values(BicycleType).includes(val),
      'Invalid bicycle type'
    ),

  description: z
    .string()
    .min(10, 'Description must be at least 10 characters long')
    .max(500, 'Description must not be longer than 500 characters')
    .trim(),

  quantity: z
    .number()
    .int('Quantity must be an integer')
    .nonnegative('Quantity cannot be negative')
    .min(0, 'Quantity must be at least 0'),

  inStock: z.boolean().optional().default(true),
});
