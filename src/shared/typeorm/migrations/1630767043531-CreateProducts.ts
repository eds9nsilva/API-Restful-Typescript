import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1630767043531 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'products',

      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
