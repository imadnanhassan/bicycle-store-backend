import { Request, Response } from 'express';
import { apiResponse } from '../../utils/apiResponse';
import { OrderService } from './order.service';
import { OrderSchema } from './order.validation';

const createOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const orderData = OrderSchema.parse(req.body);
    const order = await OrderService.createOrder(orderData);
    res
      .status(200)
      .json(apiResponse.success(order, 'Order created successfully'));
  } catch (error) {
    res.status(400).json(apiResponse.error(error, 'Invalid order data'));
  }
};

export const OrderController = {
  createOrder,
};
