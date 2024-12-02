import { AbstractEntity } from "src/__shared__/entities/abstract.entity";
import { Column, Entity } from "typeorm";

@Entity("schedule")
export class Schedule extends AbstractEntity {
  @Column()
  fromDateTime: Date;

  @Column()
  toDateTime: Date;

  @Column()
  location: string;
}
