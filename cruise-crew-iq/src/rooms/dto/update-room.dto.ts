import { IsString, IsOptional, IsEnum, IsNumber } from "class-validator";
import { RoomType } from "../enums/RoomType.enum";

export namespace UpdateRoomDto {
  export class Input {
    @IsString()
    @IsOptional()
    roomNumber?: string;

    @IsNumber()
    @IsOptional()
    capacity?: number;

    @IsEnum(RoomType)
    @IsOptional()
    roomType?: RoomType;

    @IsNumber()
    @IsOptional()
    price?: number;
  }
  export class Output {
    roomNumber: string;
    capacity: number;
    roomType: RoomType;
    price: number;
    occupied: boolean;
  }
}
