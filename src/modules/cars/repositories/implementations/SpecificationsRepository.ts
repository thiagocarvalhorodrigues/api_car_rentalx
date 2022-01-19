import { Specification } from '../../model/Specification';
import { ISpecificationRepository, ICreateSpecificationDTO } from '../ISpecificationRepository';

 
class SpecificationsRepository implements ISpecificationRepository {
    private specification: Specification[];

    constructor() {
        this.specification = [];
    }

    create({ description, name }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        })
        this.specification.push(specification);
    }
    findBynamme(name: string): Specification {
        const specification = this.specification.find(
            specification => specification.name === name);
        return specification;
    }

}

export { SpecificationsRepository }
