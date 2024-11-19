import { IJwtPayload } from "../interfaces/jwt.payload.interface";
import { JwtService } from "@nestjs/jwt";
import { Injectable } from "@nestjs/common";
import { appConfig } from "src/__shared__/config/app.config";

/**
 * Handles JWT token logic
 */
@Injectable()
export class TokenService {
  private readonly configService = appConfig();
  private readonly jwtConfig = this.configService.jwt;
  private readonly jwtRefreshConfig = this.configService.jwtRefresh;
  private readonly jwtService = new JwtService();

  generateEmailToken(email: string): string {
    return this.jwtService.sign(
      { email },
      {
        secret: this.jwtConfig.secret,
        expiresIn: "30m",
      },
    );
  }

  generateJwtToken(payload: IJwtPayload): string {
    return this.jwtService.sign(payload, {
      expiresIn: this.jwtConfig.expiresIn,
      secret: this.jwtConfig.secret,
    });
  }

  generateRefreshToken(userId: number): string {
    const payload = { sub: userId };
    return this.jwtService.sign(payload, {
      expiresIn: this.jwtRefreshConfig.expiresIn,
      secret: this.jwtRefreshConfig.secret,
    });
  }

  getTokenPayload<T>(token: string): T {
    const payload = this.jwtService.verify(token, {
      secret: this.jwtConfig.secret,
    });
    return payload;
  }
}
