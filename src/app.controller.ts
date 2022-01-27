import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(req) {
    return req.user;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('health')
  getHealth(): string {
    return this.appService.getHealth();
  }
}
