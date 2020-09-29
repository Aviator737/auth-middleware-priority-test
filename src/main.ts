import { NestFactory } from '@nestjs/core'
import { FastifyAdapter } from '@nestjs/platform-fastify/adapters/fastify-adapter'
import { NestFastifyApplication } from '@nestjs/platform-fastify/interfaces/nest-fastify-application.interface'
import { CookiesInterceptor } from 'nest-cookies'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())

  app.useGlobalInterceptors(new CookiesInterceptor())
  await app.listen(3000)
}
bootstrap()
