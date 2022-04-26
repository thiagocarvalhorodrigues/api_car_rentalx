import { compare } from "bcrypt";
import { injectable, inject } from 'tsyringe';
import { sign } from 'jsonwebtoken';
import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { AppError } from '../../../../../errors/AppError';

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    },
    token: string;
}
@injectable()
class AuthenticateUseUserCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new AppError("Email or password incorrect", 401)
        }

        const passwordMath = await compare(password, user.password);

        if (!passwordMath) {
            throw new AppError("Email or password incorrect", 401)
        }

        const token = sign({}, "323242097368577e6f3aac03c6dcedb6", {
            subject: user.id,
            expiresIn: "1d"
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }

        return tokenReturn;
    }
}

export { AuthenticateUseUserCase }