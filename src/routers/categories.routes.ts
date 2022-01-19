import { request, response, Router } from "express";
import multer from "multer";

import { createCategoryController } from '../modules/cars/UseCases/createCategory';
import { listCategoriesController } from '../modules/cars/UseCases/listCategories';
import { importCategoryController } from '../modules/cars/UseCases/importCategory';


const categoriesRoutes = Router();

const upload = multer({
dest: "./tmp"
})

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response)
})

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request,response)
})

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
 return importCategoryController.handle(request,response)

})
export { categoriesRoutes };