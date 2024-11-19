import {
  Controller,
  Body,
  Param,
  Query,
  UseInterceptors,
  UploadedFile,
  Res,
  NotFoundException,
} from "@nestjs/common";
import { LicenseService } from "./license.service";
import { CreateLicenseDto } from "./dto/create-license.dto";
import { UpdateLicenseDto } from "./dto/update-license.dto";
import { ApiTags } from "@nestjs/swagger";
import {
  ApiRequestBody,
  CreatedResponse,
  DeleteOperation,
  ErrorResponses,
  ForbiddenResponse,
  GetOperation,
  OkResponse,
  PaginatedOkResponse,
  PostOperation,
  UnauthorizedResponse,
} from "src/__shared__/decorators";
import { JwtGuard } from "src/auth/guards/jwt.guard";
import { Authorize } from "src/auth/decorators/authorize.decorator";
import { FetchLicenseDto } from "./dto/fetch-license.dto";
import { GenericResponse } from "../__shared__/dto/generic-response.dto";
import { plainToInstance } from "class-transformer";
import { FileInterceptor } from "@nestjs/platform-express";
import { v4 as uuidv4 } from "uuid";
import { diskStorage } from "multer";
import { existsSync } from "fs";
import { resolve } from "path";
import { Response } from "express";

@ApiTags("License")
@Controller("license")
export class LicenseController {
  constructor(private readonly licenseService: LicenseService) {}

  @PostOperation("", "Create License")
  @CreatedResponse()
  @ApiRequestBody(CreateLicenseDto.Input)
  @UseInterceptors(
    FileInterceptor("file", {
      storage: diskStorage({
        destination: "./uploads", // Path where files will be stored
        filename: (req, file, callback) => {
          const fileExtension = file.originalname.split(".").pop();
          const uniqueName = `${uuidv4()}.${fileExtension}`;
          callback(null, uniqueName);
        },
      }),
    }),
  )
  @ErrorResponses(UnauthorizedResponse, ForbiddenResponse)
  async createLicense(
    @UploadedFile() file: Express.Multer.File,
    @Body() createLicenseDto: CreateLicenseDto.Input,
  ): Promise<void> {
    return await this.licenseService.createLicense(
      createLicenseDto,
      file.filename,
    );
  }

  @GetOperation("download/:filename", "Download File")
  async downloadFile(
    @Param("filename") filename: string,
    @Res() res: Response,
  ) {
    const filePath = resolve(__dirname, "../../uploads", filename);
    const exists = existsSync(filePath);

    if (!exists) {
      throw new NotFoundException("File not found");
    }

    res.sendFile(filePath, (err) => {
      if (err) {
        throw new Error("Error sending file");
      }
    });
  }

  @GetOperation("", "Find All Licenses")
  @PaginatedOkResponse(FetchLicenseDto.Output)
  @Authorize(JwtGuard)
  @ApiRequestBody(FetchLicenseDto.Input)
  @ErrorResponses(UnauthorizedResponse, ForbiddenResponse)
  async getAllLicense(
    @Query() fetchLicenseDto: FetchLicenseDto.Input,
  ): Promise<GenericResponse<FetchLicenseDto.Output>> {
    return await this.licenseService.findAllLicense(fetchLicenseDto);
  }

  @GetOperation(":id", "Find One License")
  @OkResponse(CreateLicenseDto.Output)
  @Authorize(JwtGuard)
  @ErrorResponses(UnauthorizedResponse, ForbiddenResponse)
  async getLicense(
    @Param("id") id: number,
  ): Promise<GenericResponse<CreateLicenseDto.Output>> {
    const license = await this.licenseService.findLicenseById(id);
    const output = plainToInstance(CreateLicenseDto.Output, license);
    return new GenericResponse("License retrieved successfully", output);
  }

  @PostOperation(":id", "Update License")
  @OkResponse(UpdateLicenseDto.Output)
  @Authorize(JwtGuard)
  @ApiRequestBody(UpdateLicenseDto.Input)
  @ErrorResponses(UnauthorizedResponse, ForbiddenResponse)
  async updateLicense(
    @Param("id") id: number,
    @Body() updateLicenseDto: UpdateLicenseDto.Input,
  ) {
    return this.licenseService.updateLicenseById(id, updateLicenseDto);
  }

  @DeleteOperation(":id", "Delete License")
  @OkResponse()
  @Authorize(JwtGuard)
  @ErrorResponses(UnauthorizedResponse, ForbiddenResponse)
  async removeLicense(@Param("id") id: number): Promise<void> {
    return await this.licenseService.removeTaskById(id);
  }
}
