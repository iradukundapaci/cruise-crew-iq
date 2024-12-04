import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";

export namespace AssignRoomDto {
  export class Input {
    @IsNumber()
    @IsNotEmpty()
    roomId: number;

    @IsNotEmpty()
    @IsEmail()
    userEmail: string;
  }
}
