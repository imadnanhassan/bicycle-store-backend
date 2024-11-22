"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = exports.BicycleType = void 0;
const zod_1 = require("zod");
// Enum for Bicycle Types
var BicycleType;
(function (BicycleType) {
    BicycleType["Mountain"] = "Mountain";
    BicycleType["Road"] = "Road";
    BicycleType["Hybrid"] = "Hybrid";
    BicycleType["BMX"] = "BMX";
    BicycleType["Electric"] = "Electric";
})(BicycleType || (exports.BicycleType = BicycleType = {}));
// Zod validation schema for Product
exports.ProductSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .min(10, 'Name must be at least 10 characters long')
        .max(100, 'Name must not be longer than 100 characters')
        .trim(),
    brand: zod_1.z
        .string()
        .min(5, 'Brand name must be at least 100 characters long')
        .max(50, 'Brand name must not be longer than 50 characters')
        .trim(),
    price: zod_1.z
        .number()
        .positive('Price must be a positive number')
        .min(1, 'Price must be at least 1')
        .max(10000, 'Price must be less than 10000'),
    type: zod_1.z
        .enum([
        BicycleType.Mountain,
        BicycleType.Road,
        BicycleType.Hybrid,
        BicycleType.BMX,
        BicycleType.Electric,
    ])
        .refine((val) => Object.values(BicycleType).includes(val), 'Invalid bicycle type'),
    description: zod_1.z
        .string()
        .min(10, 'Description must be at least 10 characters long')
        .max(500, 'Description must not be longer than 500 characters')
        .trim(),
    quantity: zod_1.z
        .number()
        .int('Quantity must be an integer')
        .nonnegative('Quantity cannot be negative')
        .min(0, 'Quantity must be at least 0'),
    inStock: zod_1.z.boolean().optional().default(true),
});