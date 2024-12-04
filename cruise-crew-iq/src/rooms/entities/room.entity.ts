import { AbstractEntity } from "src/__shared__/entities/abstract.entity";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { RoomType } from "../enums/RoomType.enum";
import { Customer } from "src/customer/entities/customer.entity";

@Entity({ name: "rooms" })
export class Room extends AbstractEntity {
  @Column({ unique: true })
  roomNumber: string;

  @Column()
  capacity: number;

  @Column()
  roomType: RoomType;

  @Column()
  price: number;

  @Column()
  occupied: boolean = false;

  @OneToOne(() => Customer, (customer) => customer.id, {
    cascade: true,
    nullable: true,
  })
  @JoinColumn()
  customer: Customer;
}
