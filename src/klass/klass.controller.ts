import { Request, Response } from 'express'
import { Delete, Get, Patch, Post } from '../lib/controller/methodDecorators'
import { KlassRepository } from './klass.repository'
import { CreateKlassSchema, UpdateKlassSchema } from './klass.schema';
import { ResourceIdentifier } from './klass.schema'

export class KlassController {
  constructor(public repository: KlassRepository) { }

  @Get('/')
  async findAll(req: Request, res: Response) {
    return this.repository.read()
  }
  @Get('/:id')
  async findOne(req: Request, res: Response) {
    const { id } = ResourceIdentifier.parse(req.params)
    const klass = await this.repository.readOne({ id })
    if (!klass) {
      res.sendStatus(404)
      return
    }
    const sessions = await this.repository.readKlassSessions({ id })
    res.status(200).json({ klass, sessions })
  }
  @Post('/')
  async create(req: Request, res: Response) {
    const data = CreateKlassSchema.parse(req.body)
    const klass = await this.repository.create(data)
    res.status(201).json(klass)
  }
  @Patch('/:id')
  async update(req: Request, res: Response) {
    const { id } = ResourceIdentifier.parse(req.params)
    const data = UpdateKlassSchema.parse(req.body)
    let klass = await this.repository.readOne({ id })
    if (!klass) {
      res.sendStatus(404)
      return
    }
    klass = await this.repository.update({ id: klass.id }, data)
    return klass
  }
  @Delete('/:id')
  async delete(req: Request, res: Response) {
    const { id } = ResourceIdentifier.parse(req.params)
    let klass = await this.repository.readOne({ id })
    if (!klass) {
      res.sendStatus(404)
      return
    }
    await this.repository.delete({ id })
    res.status(200)
  }
}
