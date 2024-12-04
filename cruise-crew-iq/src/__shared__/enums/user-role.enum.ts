import { BadRequestException } from "@nestjs/common";

export enum UserRole {
  ADMIN = "ADMIN",
  CLERK = "CLERK",
  CREW = "CREW",
}

export function getUserRole(role: string): UserRole {
  switch (role.toUpperCase()) {
    case "CREW":
      return UserRole.CREW;
    case "ADMIN":
      return UserRole.ADMIN;
    case "CLERK":
      return UserRole.CLERK;
    default:
      throw new BadRequestException(`Invalid role: ${role}`);
  }
}
