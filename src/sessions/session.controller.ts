import type { Request, Response } from 'express'
import { Delete, Get, Patch, Post } from '../lib/controller/methodDecorators'
import { Status } from '../lib/controller/statusDecorator'
import { SessionRepository } from './session.repository'
import { CreateSessionSchema, ResourceIdentifier } from './sessions.schema'

export class SessionController {
  constructor(public repository: SessionRepository) { }

  @Get('/')
  async find(req: Request, res: Response) {
    return await this.repository.read()
  }
  @Get('/:id')
  async findOne(req: Request, res: Response) {
    const { id } = ResourceIdentifier.parse(req.params)
    const session = this.repository.readOneAndRelated({ id })
    if (!session) {
      res.sendStatus(404)
      return
    }
    return session
  }
  @Post('/')
  @Status(201)
  async create(req: Request, res: Response) {
    const data = CreateSessionSchema.parse(req.body)
    return this.repository.create(data)
  }
  @Patch('/:id')
  async update(req: Request, res: Response) {
    const { id } = ResourceIdentifier.parse(req.params)
    const data = CreateSessionSchema.parse(req.body)
    let session = await this.repository.readOne({ id })
    if (!session) {
      res.sendStatus(404)
      return
    }
    if (session.attended) {
      res.status(405).send('Cannot update an attended session.')
    }
    session = await this.repository.update({ id }, data)
    return session
  }
  @Delete('/')
  @Status(200)
  async delete(req: Request, res: Response) {
    const { id } = ResourceIdentifier.parse(req.params)
    await this.repository.delete({ id })
    res.sendStatus(200)
  }
}
