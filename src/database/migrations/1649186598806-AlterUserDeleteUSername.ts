import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUserDeleteUSername1649186598806 implements MigrationInterface {
    name = 'AlterUserDeleteUSername1649186598806'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "username")
    };

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users",
            new TableColumn({
                name: "username",
                type: "varchar",
            })
        );
    }
}
