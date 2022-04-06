"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../../entities/User");
class UsersRepository {
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(User_1.User);
    }
    async create({ name, username, email, driver_license, password, }) {
        const user = this.repository.create({
            name,
            username,
            email,
            driver_license,
            password,
        });
        await this.repository.save(user);
    }
}
exports.UsersRepository = UsersRepository;
