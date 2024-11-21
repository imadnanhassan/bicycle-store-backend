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

const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const { searchTerm } = req.query;
    const products = await ProductService.getAllProductsToDB(
      searchTerm as string | undefined
    );
    res
      .status(200)
      .json(apiResponse.success(products, 'Bicycles retrieved successfully'));
  } catch (error) {
    res.status(500).json(apiResponse.error(error, 'Failed to fetch products'));
  }
};

const getSingleProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { productId } = req.params;

    const product = await ProductService.getSingleProductByIdFromDB(productId);

    if (!product) {
      res
        .status(404)
        .json(apiResponse.error(null, 'Bicycle not found with the given ID'));
      return;
    }

    res
      .status(200)
      .json(apiResponse.success(product, 'Bicycle fetched successfully'));
  } catch (error) {
    res
      .status(500)
      .json(apiResponse.error(error, 'Error fetching bicycle by ID'));
  }
};

export const ProductController = {
  addProduct,
  getAllProducts,
  getSingleProductById,
};
