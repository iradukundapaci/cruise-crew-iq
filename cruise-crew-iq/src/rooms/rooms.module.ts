import { Module } from "@nestjs/common";
import { RoomsService } from "./rooms.service";
import { RoomsController } from "./rooms.controller";
import { Room } from "./entities/room.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerModule } from "src/customer/customer.module";

@Module({
  imports: [TypeOrmModule.forFeature([Room]), CustomerModule],
  controllers: [RoomsController],
  providers: [RoomsService],
  exports: [RoomsService],
})
export class RoomsModule {}
