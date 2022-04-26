import "reflect-metadata";
require('dotenv').config()

import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import swaggerUi from 'swagger-ui-express';

import "./database";

import "./shared/container"

import { router } from "./routers";
import swaggerFile from "./swagger.json";
import { AppError } from './errors/AppError';

const { PORT } = process.env;

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        })
    }
    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`,
    })
})

app.listen(PORT, () => console.log(`Servidor conectado na porta ${PORT}`));
