import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { plainToInstance } from "class-transformer";
import { paginate } from "nestjs-typeorm-paginate";
import { CreateRoomDto } from "./dto/create-room.dto";
import { FetchRoomDto } from "./dto/fetch-room.dto";
import { RoomDto } from "./dto/room.dto";
import { UpdateRoomDto } from "./dto/update-room.dto";
import { Room } from "./entities/room.entity";
import { AssignRoomDto } from "./dto/assign-room.dto";
import { CustomerService } from "src/customer/customer.service";

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
    private readonly customerService: CustomerService,
  ) {}
  async createRoom(createRoomDto: CreateRoomDto.Input): Promise<void> {
    const room = await this.findRoomByRoomNumber(createRoomDto.roomNumber);

    if (room) {
      throw new ConflictException("Room already exists");
    }

    const newRoom = plainToInstance(Room, {
      ...createRoomDto,
    });

    await this.roomRepository.save(newRoom);
  }

  async findAllRoom(dto: FetchRoomDto.Input): Promise<any> {
    const queryBuilder = this.roomRepository
      .createQueryBuilder("rooms")
      .orderBy("rooms.id", "DESC")
      .select([
        "rooms.id",
        "rooms.roomNumber",
        "rooms.capacity",
        "rooms.roomType",
        "rooms.price",
        "rooms.occupied",
      ]);

    if (dto.q) {
      queryBuilder.andWhere(
        "rooms.roomNumber ilike :searchKey OR rooms.roomType ilike :searchKey",
        {
          searchKey: `%${dto.q}%`,
        },
      );
    }

    return await paginate<Room>(queryBuilder, {
      page: dto.page,
      limit: dto.size,
    });
  }

  async findRoomById(id: number): Promise<Room> {
    const room = await this.roomRepository.findOne({
      where: { id },
    });

    if (!room) {
      throw new NotFoundException("Room not found");
    }

    return room;
  }

  async updateRoomById(
    id: number,
    updateRoomDto: UpdateRoomDto.Input,
  ): Promise<RoomDto.Output> {
    const room = await this.findRoomById(id);

    if (!room) {
      throw new NotFoundException("Room not found");
    }

    let updatedRoom = plainToInstance(Room, {
      ...room,
      ...updateRoomDto,
    });

    updatedRoom = await this.roomRepository.save(updatedRoom);
    return plainToInstance(RoomDto.Output, updatedRoom);
  }

  async removeRoomById(id: number): Promise<void> {
    const room = await this.findRoomById(id);
    if (!room) {
      throw new NotFoundException("Room not found");
    }

    await this.roomRepository.remove(room);
  }

  async findRoomByRoomNumber(roomNumber: string): Promise<Room | undefined> {
    return await this.roomRepository.findOne({
      where: { roomNumber },
    });
  }

  async updateRoomStatus(id: number) {
    const room = await this.findRoomById(id);
    if (!room) {
      throw new NotFoundException("Room not found");
    }
    room.occupied = !room.occupied;
    await this.roomRepository.save(room);
  }

  async assignRoom(assignRoomDto: AssignRoomDto.Input) {
    const room = await this.findRoomById(+assignRoomDto.roomId);

    if (!room) {
      throw new NotFoundException("Room not found");
    }

    const customer = await this.customerService.findCustomerByEmail(
      assignRoomDto.userEmail,
    );

    room.occupied = true;
    room.customer = customer;

    await this.roomRepository.save(room);
  }
}
