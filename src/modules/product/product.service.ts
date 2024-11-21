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

const getAllProductsToDB = async (searchTerm: string | undefined) => {
  try {
    let query = {};
    if (searchTerm) {
      query = {
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          { brand: { $regex: searchTerm, $options: 'i' } },
          { type: { $regex: searchTerm, $options: 'i' } },
        ],
      };
    }

    const bicycles = await ProductModel.find(query);

    return bicycles;
  } catch (error) {
    throw new Error('Error fetching bicycles: ');
  }
};

export const ProductService = {
  addProductToDB,
  getAllProductsToDB,
};
