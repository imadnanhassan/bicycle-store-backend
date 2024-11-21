import { Request, Response } from 'express';
import { ProductService } from './product.service';
import { apiResponse } from '../../utils/apiResponse';

const addProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    const product = await ProductService.addProductToDB(productData);
    res
      .status(200)
      .json(apiResponse.success(product, 'Product added successfully'));
  } catch (error) {
    res
      .status(400)
      .json(apiResponse.error(error, 'Error adding product to database'));
  }
};

export const ProductController = {
  addProduct,
};
