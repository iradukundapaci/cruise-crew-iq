import { PasswordEncryption } from "./utils/password-encrytion.util";
import { IJwtPayload } from "./interfaces/jwt.payload.interface";
import { UserRole } from "src/__shared__/enums/user-role.enum";
import { ForgotPasswordDto } from "./dto/forgot-password.dto";
import { ResetPasswordDto } from "./dto/reset-password.dto";
import { UsersService } from "src/users/users.service";
import { User } from "src/users/entities/user.entity";
import { TokenService } from "./utils/jwt.util";
import { SignupDto } from "./dto/sign-up.dto";
import { SignInDto } from "./dto/sign-in.dto";
import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from "@nestjs/common";
import { plainToInstance } from "class-transformer";

@Injectable()
export class AuthService {
  private tokenService: TokenService;

  constructor(private readonly usersService: UsersService) {
    this.tokenService = new TokenService();
  }

  async signup(signUpDTO: SignupDto.Input): Promise<void> {
    const { email, names, password } = signUpDTO;

    const userExists = await this.usersService.findUserByEmail(email);
    if (userExists) {
      throw new ConflictException("User already exists");
    }

    const user = plainToInstance(User, {
      email,
      names,
      password,
      role: UserRole.CREW,
    });

    await this.usersService.createUser(user);
  }

  async signIn(signInDTO: SignInDto.Input): Promise<SignInDto.Output> {
    const { email, password } = signInDTO;
    const user = await this.usersService.findUserByEmail(email);

    if (!user || !PasswordEncryption.comparePassword(password, user.password))
      throw new UnauthorizedException("Invalid email or password");

    if (!user.verifiedAt)
      throw new UnauthorizedException("Account not verified");

    if (!user.activated)
      throw new UnauthorizedException("Account not activated, contact support");

    const payload: IJwtPayload = {
      sub: user.email,
      id: user.id,
      role: user.role,
    };
    const accessToken = this.tokenService.generateJwtToken(payload);

    return new SignInDto.Output(accessToken);
  }

  async logout(userId: number): Promise<void> {
    const user = await this.usersService.findUserById(userId);

    if (!user) throw new UnauthorizedException();

    if (!user.refreshToken) throw new UnauthorizedException();

    await this.usersService.updateRefreshToken(userId, null);
  }

  async forgotPassword(
    forgotPasswordDto: ForgotPasswordDto.Input,
  ): Promise<void> {
    const { email } = forgotPasswordDto;
    const user = await this.usersService.findUserByEmail(email);

    if (!user) throw new NotFoundException("User not found");
  }
}
