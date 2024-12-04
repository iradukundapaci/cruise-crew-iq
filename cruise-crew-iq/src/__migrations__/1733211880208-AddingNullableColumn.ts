import { MigrationInterface, QueryRunner } from "typeorm";

export class AddingNullableColumn1733211880208 implements MigrationInterface {
  name = "AddingNullableColumn1733211880208";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "rooms" ADD "customerId" integer`);
    await queryRunner.query(
      `ALTER TABLE "rooms" ADD CONSTRAINT "UQ_e896b091b9958a9a7565ae0f94c" UNIQUE ("customerId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "rooms" ADD CONSTRAINT "FK_e896b091b9958a9a7565ae0f94c" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "rooms" DROP CONSTRAINT "FK_e896b091b9958a9a7565ae0f94c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "rooms" DROP CONSTRAINT "UQ_e896b091b9958a9a7565ae0f94c"`,
    );
    await queryRunner.query(`ALTER TABLE "rooms" DROP COLUMN "customerId"`);
  }
}
