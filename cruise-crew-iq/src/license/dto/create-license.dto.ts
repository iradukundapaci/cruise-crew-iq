import { IsNotEmpty, IsString } from "class-validator";

export namespace CreateLicenseDto {
  export class Input {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    issueDate: string;
  }

  export class Output {
    title: string;
    description: string;
    documentUrl: string;
    issueDate: Date;
  }
}
