import express, { Application } from 'express';
import cors from 'cors';
import { urlencoded } from 'body-parser';
import { errorHandler } from './middleware/errorHandler';
import { ProductRoutes } from './modules/product/product.route';
import { OrderRoutes } from './modules/order/order.route';

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

// Simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// application products routes
app.use('/api/v1/products', ProductRoutes);
app.use('/api/v1/order', OrderRoutes);

// Global Error Handler
app.use(errorHandler);

export default app;
