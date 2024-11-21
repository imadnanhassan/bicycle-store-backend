import { Request, Response } from 'express';
import { ProductService } from './product.service';
import { apiResponse } from '../../utils/apiResponse';
import { ProductSchema } from './product.validation';

const addProduct = async (req: Request, res: Response) => {
  try {
    const validatedData = ProductSchema.parse(req.body);

    const product = await ProductService.addProductToDB(validatedData);
    res
      .status(200)
      .json(apiResponse.success(product, 'Bicycle created successfully'));
  } catch (error) {
    res.status(400).json(apiResponse.error(error, 'Invalid product data'));
  }
};

export const ProductController = {
  addProduct,
};
