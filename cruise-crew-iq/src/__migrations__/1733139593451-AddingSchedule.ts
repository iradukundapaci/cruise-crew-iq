import { MigrationInterface, QueryRunner } from "typeorm";

export class AddingSchedule1733139593451 implements MigrationInterface {
  name = "AddingSchedule1733139593451";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "schedule" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "fromDateTime" TIMESTAMP NOT NULL, "toDateTime" TIMESTAMP NOT NULL, "location" character varying NOT NULL, CONSTRAINT "PK_1c05e42aec7371641193e180046" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "schedule"`);
  }
}
