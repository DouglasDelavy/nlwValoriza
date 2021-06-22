import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1624328304935 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "admin",
            type: "bit",
            default: false
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "NOW()"
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "NOW()"
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }

}
