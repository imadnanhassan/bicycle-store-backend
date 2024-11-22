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
exports.ProductService = void 0;
const product_model_1 = require("./product.model");
const addProductToDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProduct = yield product_model_1.ProductModel.create(product);
        return newProduct;
    }
    catch (error) {
        throw new Error('Error adding product to database');
    }
});
const deleteProductFromDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedProduct = yield product_model_1.ProductModel.findByIdAndDelete(productId);
    return deletedProduct;
});
exports.ProductService = {
    addProductToDB,
    deleteProductFromDB,
};
