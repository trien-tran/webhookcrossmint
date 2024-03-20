import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/webhook')
  webhook(@Body() data: any, @Request() request): any {
    console.log('🚀 ~ AppController ~ webhook ~ request:', request);
    console.log('🚀 ~ AppController ~ webhook ~ data:', data);
    return this.appService.webhook();
  }
}
