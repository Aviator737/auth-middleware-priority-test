import { Controller, Get, Request } from '@nestjs/common'
import { NestCookieRequest } from 'nest-cookies';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Request() req: NestCookieRequest): string {

    console.log('------------------------------\napp controller')

    console.log('cookies:\n', req.cookies)

    return this.appService.getHello();
  }
}
