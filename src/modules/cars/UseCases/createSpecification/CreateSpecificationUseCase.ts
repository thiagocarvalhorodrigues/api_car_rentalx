import {inject, injectable } from "tsyringe"
import { AppError } from '../../../../errors/AppError';
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository"

interface IRequest {
    name: string;
    description: string;
}
@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specificationRepository: ISpecificationRepository) { }
    async execute({ name, description }: IRequest): Promise<void> {
        const specificationAlreadyExist = await this.specificationRepository.findByName(name);

        if (specificationAlreadyExist) {
            throw new AppError("Specification already Exists!", 400)

        }
        await this.specificationRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationUseCase }
