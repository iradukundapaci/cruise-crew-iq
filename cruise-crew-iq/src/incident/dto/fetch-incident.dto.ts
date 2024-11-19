import { PaginationDto } from "src/__shared__/dto/pagination.dto";
import { IncidentStatus } from "src/__shared__/enums/incident-status.enum";

export namespace FetchIncidentDto {
  export class Input extends PaginationDto {}

  export class OutPut {
    id: number;
    title: string;
    description: string;
    status: IncidentStatus;
    resolution: string;
  }
}
