import { ISpecificationRepository } from "../../repositories/ISpecificationRepository"

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationRepository: ISpecificationRepository) { }
    execute({ name, description }: IRequest): void {
        const specificationAlreadyExist = this.specificationRepository.findBynamme(name);

        if (specificationAlreadyExist) {
            throw new Error("Specification already Exists!")
            
        }
        this.specificationRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationUseCase }
