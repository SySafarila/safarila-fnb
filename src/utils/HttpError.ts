import { HttpException, HttpStatus } from '@nestjs/common';

export default class HttpError extends HttpException {
  message: string;
  statusCode: HttpStatus;
  constructor(message: string, statusCode: HttpStatus) {
    super(message, statusCode);
    this.message = message;
    this.statusCode = statusCode;
  }

  getResponse(): string | object {
    return {
      status_code: this.statusCode,
      message: this.message,
    };
  }
}
