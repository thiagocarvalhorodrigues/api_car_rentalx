"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSpecifications1646327434163 = void 0;
const typeorm_1 = require("typeorm");
class CreateSpecifications1646327434163 {
    constructor() {
        this.name = 'CreateSpecifications1646327434163';
    }
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "specifications",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar"
                },
                {
                    name: "description",
                    type: "varchar"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("specifications");
    }
}
exports.CreateSpecifications1646327434163 = CreateSpecifications1646327434163;
