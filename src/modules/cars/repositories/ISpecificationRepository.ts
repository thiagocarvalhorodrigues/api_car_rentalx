import { Category } from '../model/Category';
import { Specification } from '../model/Specification';

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {

    create({ description, name }: ICreateSpecificationDTO): void;
    findBynamme(name: string): Specification;
}

export { ISpecificationRepository, ICreateSpecificationDTO }
