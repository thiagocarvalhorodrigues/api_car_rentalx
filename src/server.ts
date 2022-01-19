require('dotenv').config()
import express from "express";
import { router } from "./routers"

import swaggerUi from 'swagger-ui-express';
import swaggerFile from "./swagger.json"

const app = express();

const { PORT } = process.env;

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router);

app.get('/', (request, response) => {
    return response.json({ message: "Bem VInDA Beatriz" });
});

app.listen(PORT, () => console.log(`Servidor conectado na porta ${PORT}`));
