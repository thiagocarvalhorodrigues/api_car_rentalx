"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsers1646836830662 = void 0;
const typeorm_1 = require("typeorm");
class CreateUsers1646836830662 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "uuid"
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "username",
                    type: "varchar",
                    isUnique: true
                },
                {
                    name: "password",
                    type: "varchar"
                },
                {
                    name: "email",
                    type: "varchar"
                },
                {
                    name: "driver_license",
                    type: "varchar"
                },
                {
                    name: "isAdmin",
                    type: "boolean",
                    default: false
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("users");
    }
}
exports.CreateUsers1646836830662 = CreateUsers1646836830662;
