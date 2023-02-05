import type { Request, Response } from 'express'
import { Status, Delete, Get, Patch, Post } from '../lib/controller'
import { SessionRepository } from './session.repository'
import { CreateSessionSchema, ResourceIdentifier, UpdateSesssionSchema } from './sessions.schema'

export class SessionController {
  constructor(public repository: SessionRepository) { }

  @Get('/')
  async find(req: Request, res: Response) {
    return await this.repository.read()
  }
  @Get('/:id')
  async findOne(req: Request, res: Response) {
    const { id } = ResourceIdentifier.parse(req.params)
    const session = await this.repository.readOneAndRelated({ id })
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
    const data = UpdateSesssionSchema.parse(req.body)
    let session = await this.repository.readOne({ id })
    if (!session) {
      res.sendStatus(404)
      return
    }
    if (session.attended) {
      res.status(409).send('Conflict: Cannot update an attended session.')
      return
    }
    session = await this.repository.update({ id }, data)
    return session
  }
  @Delete('/:id')
  @Status(200)
  async delete(req: Request, res: Response) {
    const { id } = ResourceIdentifier.parse(req.params)
    const session = await this.repository.readOne({ id })
    if(!session){
      res.sendStatus(404)
      return 
    }
    await this.repository.delete({ id })
    res.sendStatus(200)
  }
}
