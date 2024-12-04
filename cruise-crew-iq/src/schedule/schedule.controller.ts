import { Controller, Body, Param, Query } from "@nestjs/common";
import { ScheduleService } from "./schedule.service";
import { ApiTags } from "@nestjs/swagger";
import { plainToInstance } from "class-transformer";
import { Authorize } from "src/auth/decorators/authorize.decorator";
import { JwtGuard } from "src/auth/guards/jwt.guard";
import { CreateScheduleDto } from "./dto/create-schedule.dto";
import { FetchScheduleDto } from "./dto/fetch-schedule.dto";
import { ScheduleDto } from "./dto/customer.dto";
import { UpdateScheduleDto } from "./dto/update-schedule.dto";
import {
  PostOperation,
  CreatedResponse,
  ApiRequestBody,
  ErrorResponses,
  UnauthorizedResponse,
  ForbiddenResponse,
  GetOperation,
  PaginatedOkResponse,
  OkResponse,
  PatchOperation,
  DeleteOperation,
} from "src/__shared__/decorators";
import { GenericResponse } from "src/__shared__/dto/generic-response.dto";

@Controller("schedule")
@ApiTags("Schedule")
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @PostOperation("", "Create schedule")
  @CreatedResponse()
  @Authorize(JwtGuard)
  @ApiRequestBody(CreateScheduleDto.Input)
  @ErrorResponses(UnauthorizedResponse, ForbiddenResponse)
  async createSchedule(
    @Body() createScheduleDto: CreateScheduleDto.Input,
  ): Promise<GenericResponse> {
    await this.scheduleService.createSchedule(createScheduleDto);
    return new GenericResponse("Schedule created successfully");
  }

  @GetOperation("", "Get all schedules")
  @PaginatedOkResponse(FetchScheduleDto.Output)
  @ErrorResponses(UnauthorizedResponse, ForbiddenResponse)
  async getAllSchedule(
    @Query() fetchScheduleDto: FetchScheduleDto.Input,
  ): Promise<GenericResponse<FetchScheduleDto.Output>> {
    const result = await this.scheduleService.findAllSchedule(fetchScheduleDto);
    return new GenericResponse("Schedules retrieved successfully", result);
  }

  @GetOperation(":id", "Get schedule")
  @OkResponse(ScheduleDto.Output)
  @Authorize(JwtGuard)
  @ErrorResponses(UnauthorizedResponse, ForbiddenResponse)
  async getSchedule(
    @Param("id") id: number,
  ): Promise<GenericResponse<ScheduleDto.Output>> {
    const schedule = await this.scheduleService.findscheduleById(id);
    const output = plainToInstance(ScheduleDto.Output, schedule);

    return new GenericResponse("Schedule retrieved successfully", output);
  }

  @PatchOperation(":id", "Update schedule")
  @OkResponse()
  @Authorize(JwtGuard)
  @ApiRequestBody(ScheduleDto.Output)
  @ErrorResponses(UnauthorizedResponse, ForbiddenResponse)
  async updateSchedule(
    @Param("id") id: number,
    @Body() updateScheduleDto: UpdateScheduleDto.Input,
  ): Promise<GenericResponse> {
    await this.scheduleService.updateScheduleById(id, updateScheduleDto);
    return new GenericResponse("Schedule updated successfully");
  }

  @DeleteOperation(":id", "Delete schedule")
  @OkResponse()
  @Authorize(JwtGuard)
  @ErrorResponses(UnauthorizedResponse, ForbiddenResponse)
  async removeSchedule(@Param("id") id: number): Promise<GenericResponse> {
    await this.scheduleService.removeScheduleById(id);
    return new GenericResponse("Schedule deleted successfully");
  }
}
