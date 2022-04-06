"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouters = void 0;
const express_1 = require("express");
const CreateUserController_1 = require("../modules/accounts/useCases/createUser/CreateUserController");
const usersRouters = (0, express_1.Router)();
exports.usersRouters = usersRouters;
const createUserController = new CreateUserController_1.CreateUserController();
usersRouters.post("/", createUserController.handle);
