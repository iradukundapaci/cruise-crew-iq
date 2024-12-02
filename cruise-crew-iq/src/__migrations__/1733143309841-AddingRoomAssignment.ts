import { MigrationInterface, QueryRunner } from "typeorm";

export class AddingRoomAssignment1733143309841 implements MigrationInterface {
  name = "AddingRoomAssignment1733143309841";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "customers" DROP CONSTRAINT "FK_62915d4614b61bbfcb4c6581982"`,
    );
    await queryRunner.query(
      `ALTER TABLE "customers" DROP CONSTRAINT "UQ_62915d4614b61bbfcb4c6581982"`,
    );
    await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "roomId"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "customers" ADD "roomId" integer`);
    await queryRunner.query(
      `ALTER TABLE "customers" ADD CONSTRAINT "UQ_62915d4614b61bbfcb4c6581982" UNIQUE ("roomId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "customers" ADD CONSTRAINT "FK_62915d4614b61bbfcb4c6581982" FOREIGN KEY ("roomId") REFERENCES "rooms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
