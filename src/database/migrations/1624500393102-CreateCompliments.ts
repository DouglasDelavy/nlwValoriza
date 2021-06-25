import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCompliments1624500393102 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "compliments",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
          },
          {
            name: "user_sender",
            type: "varchar",
          },
          {
            name: "user_receiver",
            type: "varchar",
          },
          {
            name: "tag_id",
            type: "varchar",
          },
          {
            name: "message",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "NOW()",
          },
        ],
        foreignKeys: [
          {
            name: "FK_USER_SENDER_COMPLIMENTS",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_sender"],
            onDelete: "RESTRICT",
            onUpdate: "RESTRICT",
          },
          {
            name: "FK_USER_RECEIVER_COMPLIMENTS",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_receiver"],
            onDelete: "RESTRICT",
            onUpdate: "RESTRICT",
          },
          {
            name: "FK_TAG_COMPLIMENTS",
            referencedTableName: "tags",
            referencedColumnNames: ["id"],
            columnNames: ["tag_id"],
            onDelete: "RESTRICT",
            onUpdate: "RESTRICT",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("compliments");
  }
}
