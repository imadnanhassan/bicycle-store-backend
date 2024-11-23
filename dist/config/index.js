"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Export configuration variables
exports.config = {
    PORT: process.env.PORT || 5000,
    MONGO_URI: process.env.MONGO_URI_ATLAS || 'mongodb://localhost:27017/bicycle-store',
};
