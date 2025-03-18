import { Body, Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

type LoginRequest = {
  email: string;
  password: string;
};

@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() loginRequest: LoginRequest, @Res() res: Response): void {
    const { email, password } = loginRequest;

    if (!email || !password) {
      res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: 'Email or Passwor is required' });
      return;
    }

    res.json({
      token: 'token',
    });
  }

  @Post('logout')
  logout(@Res() res: Response, @Req() req: Request): void {
    const headers = req.headers;
    const token = headers.authorization;

    if (!token) {
      res.status(HttpStatus.UNAUTHORIZED).json({
        message: 'Token required',
      });
      return;
    }

    res.json({
      message: 'Logout success',
    });
  }
}
