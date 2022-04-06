"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCategoriesController = void 0;
const ListCategoriesUseCase_1 = require("./ListCategoriesUseCase");
const tsyringe_1 = require("tsyringe");
class ListCategoriesController {
    async handle(request, response) {
        const listCategoriesUseCase = tsyringe_1.container.resolve(ListCategoriesUseCase_1.ListCategoriesUseCase);
        const all = await listCategoriesUseCase.execute();
        return response.json(all);
    }
}
exports.ListCategoriesController = ListCategoriesController;
