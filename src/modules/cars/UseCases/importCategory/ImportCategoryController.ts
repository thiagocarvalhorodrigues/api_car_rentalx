import { Response, Request } from 'express';
import { ImportCategoryUseCase } from "../importCategory/ImportCategoryUseCase";
import { container } from "tsyringe";

class ImportCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file }: any = request;

    const importCategoryUseCase = container.resolve(ImportCategoryUseCase)

     await importCategoryUseCase.execute(file);

    return response.status(201).send()
  }
}


export { ImportCategoryController }