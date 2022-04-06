import { ICreateUserDTO } from '../dtos/IcreateUsersDTOS';
import { User } from '../entities/User';


interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<void>;
    findByEmail(email: string): Promise<User>
    findByID(id:string): Promise<User>;
}

export { IUsersRepository }