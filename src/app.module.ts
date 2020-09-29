import { Module } from '@nestjs/common';
import { CookieModule } from 'nest-cookies';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './middleware/auth.module';

@Module({
  imports: [CookieModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
