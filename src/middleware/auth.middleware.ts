import { Injectable, NestMiddleware } from '@nestjs/common'
import { FastifyReply } from 'fastify'
import { NestCookieRequest } from 'nest-cookies'

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(req: NestCookieRequest, res: FastifyReply, next: () => void) {
    console.log('auth middleware')

    console.log('cookies:\n', req.cookies)

    return next()
  }
}
