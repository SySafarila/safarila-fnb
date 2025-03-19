import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import HttpError from 'src/utils/HttpError';

type LoginRequest = {
  email: string;
  password: string;
};

@Controller('auth')
export class AuthController {
  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() loginRequest: LoginRequest): { token: string } {
    const { email, password } = loginRequest;

    if (!email || !password) {
      throw new HttpError(
        'Email and password are required',
        HttpStatus.BAD_REQUEST,
      );
    }

    return {
      token: 'token',
    };
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@Req() req: Request): { message: string } {
    const headers = req.headers;
    const token = headers.authorization;

    if (!token) {
      throw new HttpError('Token is required', HttpStatus.UNAUTHORIZED);
    }

    return {
      message: 'Logout success',
    };
  }
}
