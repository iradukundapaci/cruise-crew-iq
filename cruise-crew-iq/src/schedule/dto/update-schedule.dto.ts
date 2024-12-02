import { IsString, IsNotEmpty, IsEmail } from "class-validator";

export namespace UpdateScheduleDto {
  export class Input {
    @IsString()
    @IsNotEmpty()
    names: string;
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @IsString()
    @IsNotEmpty()
    phoneNumber: string;
  }
  export class Output {
    names: string;
    email: string;
    phoneNumber: string;
  }
}
