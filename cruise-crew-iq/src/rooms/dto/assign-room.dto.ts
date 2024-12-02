import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export namespace AssignRoomDto {
  export class Input {
    @IsString()
    @IsNotEmpty()
    roomId: string;

    @IsNotEmpty()
    @IsEmail()
    userEmail: string;
  }
}
