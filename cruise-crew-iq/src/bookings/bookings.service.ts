import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Between, Repository } from "typeorm";
import { plainToInstance } from "class-transformer";
import { paginate } from "nestjs-typeorm-paginate";
import { Booking } from "./entities/booking.entity";
import { CreateBookingsDto } from "./dto/create-booking.dto";
import { UpdateBookingsDto } from "./dto/update-booking.dto";
import { BookingsDto } from "./dto/booking.dto";
import { FetchBookingsDto } from "./dto/fetch-booking.dto";
import { CustomerService } from "src/customer/customer.service";
import { RoomsService } from "src/rooms/rooms.service";
import { format } from "date-fns";
import * as ExcelJS from "exceljs";
import * as PDFDocument from "pdfkit";
import {
  GenerateReportDto,
  ReportType,
  ReportFormat,
} from "./dto/generate-report.dto";

@Injectable()
export class BookingsService {
  private readonly logger = new Logger(BookingsService.name);
  constructor(
    @InjectRepository(Booking)
    private readonly bookingRepository: Repository<Booking>,
    private readonly roomService: RoomsService,
    private readonly customerService: CustomerService,
  ) {}
  async createBooking(
    createBookingDto: CreateBookingsDto.Input,
  ): Promise<void> {
    let customer = await this.customerService.findCustomerByEmail(
      createBookingDto.email,
    );

    if (!customer) {
      await this.customerService.createCustomer({
        email: createBookingDto.email,
        names: createBookingDto.firstName + " " + createBookingDto.lastName,
        phoneNumber: createBookingDto.phoneNumber,
      });

      customer = await this.customerService.findCustomerByEmail(
        createBookingDto.email,
      );
    }

    const newBooking = plainToInstance(Booking, {
      ...createBookingDto,
    });

    newBooking.customer = customer;

    await this.bookingRepository.save(newBooking);
  }

  async findAllBookings(dto: FetchBookingsDto.Input): Promise<any> {
    const query = this.bookingRepository
      .createQueryBuilder("bookings")
      .leftJoinAndSelect("bookings.customer", "customer")
      .select([
        "bookings.id",
        "bookings.checkIn",
        "bookings.checkOut",
        "bookings.numberOfAdults",
        "bookings.numberOfKids",
        "bookings.specialRequest",
        "customer.names",
        "customer.email",
        "customer.phoneNumber",
      ])
      .orderBy("bookings.id", "DESC");

    return await paginate(query, {
      page: dto.page,
      limit: dto.size,
    });
  }

  async findBookingById(id: number): Promise<Booking> {
    const booking = await this.bookingRepository.findOne({
      where: { id },
    });

    if (!booking) {
      throw new NotFoundException("Booking not found");
    }

    return booking;
  }

  async updateBookingById(
    id: number,
    updateBookingDto: UpdateBookingsDto.Input,
  ): Promise<BookingsDto.Output> {
    const booking = await this.findBookingById(id);

    if (!booking) {
      throw new NotFoundException("Booking not found");
    }

    let updatedBooking = plainToInstance(Booking, {
      ...booking,
      ...updateBookingDto,
    });

    updatedBooking = await this.bookingRepository.save(updatedBooking);
    return plainToInstance(BookingsDto.Output, updatedBooking);
  }

  async removeBookingById(id: number): Promise<void> {
    const booking = await this.findBookingById(id);
    if (!booking) {
      throw new NotFoundException("Booking not found");
    }

    await this.bookingRepository.remove(booking);
  }

  /**
   * Main method to generate reports based on the provided DTO
   */
  async generateReport(
    dto: GenerateReportDto,
  ): Promise<{ data: any; contentType: string }> {
    try {
      const { startDate, endDate } = this.calculateDateRange(
        dto.type,
        dto.startDate,
        dto.endDate,
      );
      const bookings = await this.getBookings(startDate, endDate);

      if (bookings.length === 0) {
        throw new BadRequestException(
          "No bookings found for the specified date range",
        );
      }

      const formattedData = this.formatBookingData(bookings);
      return await this.generateReportByFormat(formattedData, dto.format);
    } catch (error) {
      this.logger.error(
        `Error generating report: ${error.message}`,
        error.stack,
      );
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException("Error generating report");
    }
  }

  /**
   * Calculate date range based on report type
   */
  private calculateDateRange(
    type: ReportType,
    startDate?: Date,
    endDate?: Date,
  ): { startDate: Date; endDate: Date } {
    const now = new Date();

    if (type === ReportType.weekly) {
      const start = new Date();
      start.setDate(start.getDate() - 7);
      return {
        startDate: new Date(start.setHours(0, 0, 0, 0)),
        endDate: new Date(now.setHours(23, 59, 59, 999)),
      };
    }

    if (type === ReportType.monthly) {
      const start = new Date();
      start.setMonth(start.getMonth() - 1);
      return {
        startDate: new Date(start.setHours(0, 0, 0, 0)),
        endDate: new Date(now.setHours(23, 59, 59, 999)),
      };
    }

    // Custom date range
    if (startDate && endDate) {
      return {
        startDate: new Date(new Date(startDate).setHours(0, 0, 0, 0)),
        endDate: new Date(new Date(endDate).setHours(23, 59, 59, 999)),
      };
    }

    throw new BadRequestException("Invalid date range provided");
  }

  /**
   * Fetch bookings from database with relations
   */
  private async getBookings(
    startDate: Date,
    endDate: Date,
  ): Promise<Booking[]> {
    try {
      const query = this.bookingRepository
        .createQueryBuilder("booking")
        .leftJoinAndSelect("booking.customer", "customer")
        .where({
          checkIn: Between(startDate, endDate),
        })
        .orderBy("booking.checkIn", "DESC");

      return await query.getMany();
    } catch (error) {
      this.logger.error(
        `Error fetching bookings: ${error.message}`,
        error.stack,
      );
      throw new InternalServerErrorException("Error fetching booking data");
    }
  }

  /**
   * Format booking data for report generation
   */
  private formatBookingData(bookings: Booking[]) {
    return bookings.map((booking) => ({
      bookingId: booking.id,
      customerName: booking.customer?.names || "N/A",
      customerEmail: booking.customer?.email || "N/A",
      checkIn: format(booking.checkIn, "yyyy-MM-dd"),
      checkOut: format(booking.checkOut, "yyyy-MM-dd"),
      numberOfNights: this.calculateNights(booking.checkIn, booking.checkOut),
      numberOfAdults: booking.numberOfAdults,
      numberOfKids: booking.numberOfKids || 0,
      totalGuests: booking.numberOfAdults + (booking.numberOfKids || 0),
      specialRequest: booking.specialRequest || "None",
      createdAt: format(booking.createdAt, "yyyy-MM-dd HH:mm:ss"),
    }));
  }

  /**
   * Calculate number of nights between check-in and check-out
   */
  private calculateNights(checkIn: Date, checkOut: Date): number {
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  /**
   * Generate report based on specified format
   */
  private async generateReportByFormat(
    data: any[],
    reportFormat: ReportFormat,
  ): Promise<{ data: any; contentType: string }> {
    switch (reportFormat) {
      case ReportFormat.xlsx:
        return this.generateExcelReport(data);
      case ReportFormat.pdf:
        return this.generatePdfReport(data);
      default:
        throw new BadRequestException(
          `Unsupported report format: ${reportFormat}`,
        );
    }
  }

  /**
   * Generate JSON report
   */
  private generateJsonReport(data: any[]): {
    data: string;
    contentType: string;
  } {
    try {
      return {
        data: JSON.stringify(data, null, 2),
        contentType: "application/json",
      };
    } catch (error) {
      this.logger.error(`Error generating JSON report: ${error.message}`);
      throw new InternalServerErrorException("Error generating JSON report");
    }
  }

  /**
   * Generate CSV report
   */
  private generateCsvReport(data: any[]): {
    data: string;
    contentType: string;
  } {
    try {
      const headers = Object.keys(data[0]);
      const csvRows = [
        headers.join(","),
        ...data.map((row) =>
          headers
            .map((header) => {
              const value = row[header]?.toString() || "";
              return value.includes(",") ? `"${value}"` : value;
            })
            .join(","),
        ),
      ];

      return {
        data: csvRows.join("\n"),
        contentType: "text/csv",
      };
    } catch (error) {
      this.logger.error(`Error generating CSV report: ${error.message}`);
      throw new InternalServerErrorException("Error generating CSV report");
    }
  }

  /**
   * Generate Excel report
   */
  private async generateExcelReport(
    data: any[],
  ): Promise<{ data: Buffer; contentType: string }> {
    try {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("Bookings Report");

      // Add headers
      const headers = Object.keys(data[0]);
      worksheet.addRow(headers.map((header) => this.formatHeader(header)));

      // Style headers
      worksheet.getRow(1).font = { bold: true };
      worksheet.getRow(1).fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFE0E0E0" },
      };

      // Add data
      data.forEach((row) => {
        worksheet.addRow(Object.values(row));
      });

      // Auto-fit columns
      worksheet.columns.forEach((column) => {
        column.width =
          Math.max(
            ...worksheet
              .getColumn(column.number)
              .values.map((v) => v?.toString().length || 0),
            this.formatHeader(headers[column.number - 1]).length,
          ) + 2;
      });

      return {
        data: Buffer.from(await workbook.xlsx.writeBuffer()),
        contentType:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      };
    } catch (error) {
      this.logger.error(`Error generating Excel report: ${error.message}`);
      throw new InternalServerErrorException("Error generating Excel report");
    }
  }

  /**
   * Generate PDF report
   */
  private async generatePdfReport(
    data: any[],
  ): Promise<{ data: Buffer; contentType: string }> {
    return new Promise((resolve, reject) => {
      try {
        const doc = new PDFDocument({ margin: 50 });
        const buffers: Buffer[] = [];

        doc.on("data", buffers.push.bind(buffers));
        doc.on("end", () => {
          resolve({
            data: Buffer.concat(buffers),
            contentType: "application/pdf",
          });
        });

        // Add title
        doc
          .fontSize(20)
          .text("Booking Report", { align: "center" })
          .moveDown(2);

        // Add generation date
        doc
          .fontSize(12)
          .text(`Generated: ${format(new Date(), "yyyy-MM-dd HH:mm:ss")}`)
          .moveDown(2);

        // Add table headers
        const headers = Object.keys(data[0]);
        const tableTop = 150;
        let currentTop = tableTop;

        // Draw headers
        headers.forEach((header, i) => {
          doc
            .fontSize(10)
            .text(this.formatHeader(header), 50 + i * 100, currentTop, {
              width: 90,
            });
        });

        currentTop += 20;

        // Draw data
        data.forEach((row) => {
          // Add new page if needed
          if (currentTop > doc.page.height - 50) {
            doc.addPage();
            currentTop = 50;
          }

          headers.forEach((header, i) => {
            doc
              .fontSize(8)
              .text(row[header]?.toString() || "", 50 + i * 100, currentTop, {
                width: 90,
              });
          });

          currentTop += 20;
        });

        doc.end();
      } catch (error) {
        this.logger.error(`Error generating PDF report: ${error.message}`);
        reject(new InternalServerErrorException("Error generating PDF report"));
      }
    });
  }

  /**
   * Format header string to title case
   */
  private formatHeader(header: string): string {
    return header
      .split(/(?=[A-Z])|_/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }
}
