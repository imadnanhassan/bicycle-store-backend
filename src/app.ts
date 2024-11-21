import express, { Application } from 'express';
import cors from 'cors';
import { urlencoded } from 'body-parser';
import { errorHandler } from './middleware/errorHandler';

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

// Simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Global Error Handler
app.use(errorHandler);

export default app;
