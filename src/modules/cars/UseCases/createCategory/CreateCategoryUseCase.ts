import { inject, injectable} from "tsyringe"
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
           throw new Error("Category Alredy Exists!")
    }

      await this.categoriesRepository.create({name, description})
    }
}

export { CreateCategoryUseCase }
