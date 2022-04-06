"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
require("./database");
require("./shared/container");
const routers_1 = require("./routers");
const swagger_json_1 = __importDefault(require("./swagger.json"));
const { PORT } = process.env;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use(routers_1.router);
// app.get('/', (request, response) => {
//     return response.json({ message: "Bem VInDA Beatriz" });
// });
app.listen(PORT, () => console.log(`Servidor conectado na porta ${PORT}`));
