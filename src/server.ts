import "reflect-metadata";
require('dotenv').config()


import express from "express";
import swaggerUi from 'swagger-ui-express';

import "./database";

import "./shared/container"

import { router } from "./routers";
import swaggerFile from "./swagger.json";

const { PORT } = process.env;

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router);

// app.get('/', (request, response) => {
//     return response.json({ message: "Bem VInDA Beatriz" });
// });

app.listen(PORT, () => console.log(`Servidor conectado na porta ${PORT}`));
