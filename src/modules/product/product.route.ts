import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.get('/', ProductController.getAllProducts);
router.post('/product-store', ProductController.addProduct);
router.get('/:productId', ProductController.getSingleProductById);
router.put('/:productId', ProductController.updateProduct);
router.delete('/:productId', ProductController.deleteProduct);

export const ProductRoutes = router;
