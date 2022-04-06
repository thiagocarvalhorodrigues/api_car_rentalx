"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryController = void 0;
const CreateCategoryUseCase_1 = require("./CreateCategoryUseCase");
const tsyringe_1 = require("tsyringe");
class CreateCategoryController {
    async handle(request, response) {
        const { name, description } = request.body;
        const createCategoryUseCase = tsyringe_1.container.resolve(CreateCategoryUseCase_1.CreateCategoryUseCase);
        await createCategoryUseCase.execute({ name, description });
        return response.status(201).send();
    }
}
exports.CreateCategoryController = CreateCategoryController;
