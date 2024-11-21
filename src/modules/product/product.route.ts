import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.get('/', ProductController.getAllProducts);
router.post('/product-store', ProductController.addProduct);

export const ProductRoutes = router;
