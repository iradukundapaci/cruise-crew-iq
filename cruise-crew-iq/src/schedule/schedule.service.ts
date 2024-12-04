import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectEntityManager, InjectRepository } from "@nestjs/typeorm";
import { plainToInstance } from "class-transformer";
import { paginate } from "nestjs-typeorm-paginate";
import { EntityManager, Repository } from "typeorm";
import { CreateScheduleDto } from "./dto/create-schedule.dto";
import { ScheduleDto } from "./dto/customer.dto";
import { FetchScheduleDto } from "./dto/fetch-schedule.dto";
import { Schedule } from "./entities/schedule.entity";
import { UpdateScheduleDto } from "./dto/update-schedule.dto";
import { dockLocationNotificationTemplate } from "src/__shared__/templates/dockLocationNotification";
import { SesService } from "src/ses/ses.service";
import { EventEmitter2, OnEvent } from "@nestjs/event-emitter";
import { format } from "date-fns";

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Schedule)
    private readonly scheduleRepository: Repository<Schedule>,
    private readonly sesService: SesService,
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
    private eventEmitter: EventEmitter2,
  ) {}
  async createSchedule(
    createScheduleDto: CreateScheduleDto.Input,
  ): Promise<void> {
    const newSchedule = plainToInstance(Schedule, {
      ...createScheduleDto,
    });

    this.eventEmitter.emit("schedule.created", {
      fromDateTime: newSchedule.fromDateTime,
      toDateTime: newSchedule.toDateTime,
      location: newSchedule.location,
    });

    await this.scheduleRepository.save(newSchedule);
  }

  @OnEvent("schedule.created", { async: true })
  async checkIfBookingExists(schedule: Schedule): Promise<void> {
    const fromDateTime = format(
      new Date(schedule.fromDateTime),
      "yyyy-MM-dd HH:mm:ss",
    );
    const toDateTime = format(
      new Date(schedule.toDateTime),
      "yyyy-MM-dd HH:mm:ss",
    );
    const bookings = await this.entityManager
      .createQueryBuilder()
      .select("bookings")
      .from("bookings", "bookings")
      .leftJoinAndSelect("bookings.customer", "customer")
      .select([
        "bookings.id",
        "bookings.checkIn",
        "bookings.checkOut",
        "customer.email",
        "customer.names",
      ])
      .where("bookings.checkIn >= :fromDateTime", { fromDateTime })
      .andWhere("bookings.checkIn <= :toDateTime", { toDateTime })
      .getRawMany();

    for (const booking of bookings) {
      const { customer_email, customer_names } = booking;
      const notificationEmail = {
        to: customer_email,
        subject: "Schedule Notification",
        text: "Notification for boat schedule booking",
        html: dockLocationNotificationTemplate(
          `Dear ${customer_names}`,
          schedule.location,
          fromDateTime,
          toDateTime,
        ),
      };

      await this.sesService.sendEmail(notificationEmail);
    }
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

    this.eventEmitter.emit("schedule.updated", {
      fromDateTime: updatedSchedule.fromDateTime,
      toDateTime: updatedSchedule.toDateTime,
      location: updatedSchedule.location,
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
