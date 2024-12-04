import { IsNotEmpty } from "class-validator";

export namespace UpdateScheduleDto {
  export class Input {
    @IsNotEmpty()
    fromDateTime: Date;

    @IsNotEmpty()
    toDateTime: Date;

    @IsNotEmpty()
    location: string;
  }
  export class Output {
    fromDateTime: Date;
    toDateTime: Date;
    location: string;
  }
}
