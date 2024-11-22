"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = require("body-parser");
const errorHandler_1 = require("./middleware/errorHandler");
const product_route_1 = require("./modules/product/product.route");
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
// Simple route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// application products routes
app.use('/api/v1/products', product_route_1.ProductRoutes);
// Global Error Handler
app.use(errorHandler_1.errorHandler);
exports.default = app;
