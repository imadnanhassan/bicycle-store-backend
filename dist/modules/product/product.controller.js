"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("./product.service");
const apiResponse_1 = require("../../utils/apiResponse");
const product_validation_1 = require("./product.validation");
// const addProduct = async (req: Request, res: Response) => {
//   try {
//     const validatedData = ProductSchema.parse(req.body);
//     const product = await ProductService.addProductToDB(validatedData);
//     res
//       .status(200)
//       .json(apiResponse.success(product, 'Bicycle created successfully'));
//   } catch (error) {
//     res.status(400).json(apiResponse.error(error, 'Invalid product data'));
//   }
// };
// const deleteProduct = async (req: Request, res: Response) => {
//   try {
//     const { productId } = req.params;
//     const deletedProduct = await ProductService.deleteProductFromDB(productId);
//     if (!deletedProduct) {
//       return res.status(404).json(apiResponse.error(null, 'Product not found'));
//     }
//     return res
//       .status(200)
//       .json(apiResponse.success(null, 'Product deleted successfully'));
//   } catch (error) {
//     return res
//       .status(500)
//       .json(apiResponse.error(error, 'Error deleting product'));
//   }
// };
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validatedData = product_validation_1.ProductSchema.parse(req.body);
        const product = yield product_service_1.ProductService.addProductToDB(validatedData);
        res
            .status(200)
            .json(apiResponse_1.apiResponse.success(product, 'Bicycle created successfully'));
    }
    catch (error) {
        res.status(400).json(apiResponse_1.apiResponse.error(error, 'Invalid product data'));
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const deletedProduct = yield product_service_1.ProductService.deleteProductFromDB(productId);
        return res
            .status(200)
            .json(apiResponse_1.apiResponse.success(deletedProduct, 'Product deleted successfully'));
    }
    catch (error) {
        return res
            .status(500)
            .json(apiResponse_1.apiResponse.error(error, 'Error deleting product'));
    }
});
exports.ProductController = {
    addProduct,
    deleteProduct,
};
