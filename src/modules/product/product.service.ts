/* eslint-disable @typescript-eslint/no-unused-vars */
import { Product } from './product.interface';
import { ProductModel } from './product.model';



const addProductToDB = async (product: Product) => {
  try {

    const newProduct = await ProductModel.create(product);
    return newProduct;
  } catch (error) {
    throw new Error('Error adding product to database');
  }
};

export const ProductService = {
  addProductToDB,
};
