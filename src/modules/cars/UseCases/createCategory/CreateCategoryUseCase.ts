import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
    name: string;
    description: string;
}

/**
 * [x] - Definir o tipo de retorno
 * [x] - Alterar o retorno de error
 * [x] - Acessar o repositório

 */
class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {
    }
    execute({ description, name }: IRequest):void {

        const categorieAlreadExists = this.categoriesRepository.findBynamme(name);

        if (categorieAlreadExists) {
           throw new Error("Category Alredy Exists!")
    }

        this.categoriesRepository.create({name, description})
    }
}

export { CreateCategoryUseCase }
