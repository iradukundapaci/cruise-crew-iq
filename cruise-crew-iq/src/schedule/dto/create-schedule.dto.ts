import { IsNotEmpty } from "class-validator";

export namespace CreateScheduleDto {
  export class Input {
    @IsNotEmpty()
    fromDateTime: Date;

    @IsNotEmpty()
    toDateTime: Date;
  }
}
