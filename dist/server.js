"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const config_1 = require("./config");
const server = http_1.default.createServer((req, res) => {
    console.log("Server is running...");
    if (req.url === "/" && req.method === "GET") {
        res.statusCode = 200;
        res.setHeader("Content-type", "application/json");
        res.end(JSON.stringify({
            message: "Hello from node js with typescript...",
            path: req.url,
        }));
    }
});
server.listen(config_1.env.port, () => {
    console.log(`Server running on port ${config_1.env.port}`);
});
