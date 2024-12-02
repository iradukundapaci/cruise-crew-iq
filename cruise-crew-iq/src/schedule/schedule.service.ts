import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { plainToInstance } from "class-transformer";
import { paginate } from "nestjs-typeorm-paginate";
import { Repository } from "typeorm";
import { CreateScheduleDto } from "./dto/create-schedule.dto";
import { ScheduleDto } from "./dto/customer.dto";
import { FetchScheduleDto } from "./dto/fetch-schedule.dto";
import { Schedule } from "./entities/schedule.entity";
import { UpdateScheduleDto } from "./dto/update-schedule.dto";

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Schedule)
    private readonly scheduleRepository: Repository<Schedule>,
  ) {}
  async createSchedule(
    createScheduleDto: CreateScheduleDto.Input,
  ): Promise<void> {
    const newSchedule = plainToInstance(Schedule, {
      ...createScheduleDto,
    });

    await this.scheduleRepository.save(newSchedule);
  }

  async findAllSchedule(dto: FetchScheduleDto.Input): Promise<any> {
    const queryBuilder = this.scheduleRepository
      .createQueryBuilder("schedule")
      .orderBy("schedule.id", "DESC");

    return await paginate<Schedule>(queryBuilder, {
      page: dto.page,
      limit: dto.size,
    });
  }

  async findscheduleById(id: number): Promise<Schedule> {
    const schedule = await this.scheduleRepository.findOne({
      where: { id },
    });

    if (!schedule) {
      throw new NotFoundException("Schedule not found");
    }

    return schedule;
  }

  async updateScheduleById(
    id: number,
    updateScheduleDto: UpdateScheduleDto.Input,
  ): Promise<ScheduleDto.Output> {
    const schedule = await this.findscheduleById(id);

    if (!schedule) {
      throw new NotFoundException("Schedule not found");
    }

    let updatedSchedule = plainToInstance(Schedule, {
      ...schedule,
      ...updateScheduleDto,
    });

    updatedSchedule = await this.scheduleRepository.save(updatedSchedule);
    return plainToInstance(ScheduleDto.Output, updatedSchedule);
  }

  async removeScheduleById(id: number): Promise<void> {
    const schedule = await this.findscheduleById(id);
    if (!schedule) {
      throw new NotFoundException("Schedule not found");
    }

    await this.scheduleRepository.remove(schedule);
  }
}
