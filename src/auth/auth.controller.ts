import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';
import { Request } from 'express';
// import { Roles } from '../decorators/roles.decorator';
// import { RolesGuard } from './guard/roles.guard';
// import { Role } from 'src/enums/roles.enum';
// import { Auth } from 'src/decorators/auth.decorator';
interface RequestWithUser extends Request {
  user: { email: string; role: string };
}
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(
    @Body()
    registerDto: RegisterDto,
  ) {
    return this.authService.register(registerDto);
  }
  @Post('login')
  login(
    @Body()
    loginDto: LoginDto,
  ) {
    return this.authService.login(loginDto);
  }

  //   @Get('profile')
  //   @Roles(Role.ADMIN)
  //   @UseGuards(AuthGuard, RolesGuard)
  //   profile(
  //     @Req()
  //     req: RequestWithUser,
  //   ) {
  //     return this.authService.profile(req.user);
  // }

  @Get('profile')
  // @Auth(Role.ADMIN)
  @UseGuards(AuthGuard)
  profile(
    @Req()
    req: RequestWithUser,
  ) {
    return this.authService.profile(req.user);
  }

  // @Get('profile')
  // @Auth(Role.COORDINADOR)
  // @UseGuards(AuthGuard, RolesGuard)
  // profileCoord(
  //   @Req()
  //   req: RequestWithUser,
  // ) {
  //   return this.authService.profileCoord(req.user);
  // }

  // @Get('profile')
  // @Auth(Role.INVESTIGADOR)
  // @UseGuards(AuthGuard, RolesGuard)
  // profileInvest(
  //   @Req()
  //   req: RequestWithUser,
  // ) {
  //   return this.authService.profileInvest(req.user);
  // }
}
