import { OrderModel } from './order.model';
import { ProductModel } from '../product/product.model';
import { Order } from './order.interface';

const createOrder = async (orderData: Order) => {
  const { product: productId, quantity } = orderData;

  const product = await ProductModel.findById(productId);
  if (!product) {
   
    throw new Error('Product not found');
  }

  if (product.quantity < quantity) {
    throw new Error('Insufficient stock available');
  }

  product.quantity -= quantity;
  if (product.quantity === 0) {
    product.inStock = false;
  }
  await product.save();

  const order = await OrderModel.create(orderData);
  return order;
};

export const OrderService = {
  createOrder,
};
