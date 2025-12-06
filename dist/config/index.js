"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
// dotenv.config({path: path.join(process.cwd(), ".env")})
dotenv_1.default.config();
exports.env = {
    port: process.env.PORT,
    nodeEnv: process.env.NODE_ENV
};
