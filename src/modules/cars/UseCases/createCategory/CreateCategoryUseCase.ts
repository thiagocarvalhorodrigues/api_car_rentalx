import { inject, injectable} from "tsyringe"
import { AppError } from '../../../../errors/AppError';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';


interface IRequest {
    name: string;
    description: string;
}
@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository) {
  }

   async execute({ description, name }: IRequest):Promise<void> {

        const categorieAlreadExists = await this.categoriesRepository.findByName(name);

        if (categorieAlreadExists) {
           throw new AppError("Category Alredy Exists!", 400)
    }

      await this.categoriesRepository.create({name, description})
    }
}

export { CreateCategoryUseCase }
