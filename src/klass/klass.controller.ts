import { Request, Response } from 'express'
import { Delete, Get, Patch, Post } from '../lib/controller/methodDecorators'
import { KlassInteractor } from './klass.interactor';
import { KlassRepository } from './klass.repository'
import { CreateKlassSchema, UpdateKlassSchema } from './klass.schema';
import { fromZodError } from 'zod-validation-error';

export class KlassController {
  interactor: KlassInteractor
  repository: KlassRepository
  constructor(interactor: KlassInteractor, repository: KlassRepository) {
    this.interactor = interactor
    this.repository = repository
  }
  @Get('/')
  async findAll(req: Request, res: Response) {
    return this.repository.read()
  }
  @Get('/:id')
  async findOne(req: Request, res: Response) {
    let id: number
    try{
      id = parseInt(req.params.id)
    }catch(error){
      res.status(400).json({message: "Id url param must be a number"})
      return
    }
    const klass = await this.repository.readOne({id})
    if(!klass){
      res.sendStatus(404)
      return
    }
    const sessions = await this.repository.readKlassSessions({ id })
    res.status(200).json({klass, sessions})
  }
  @Post('/')
  async create(req: Request, res: Response) {
    const bodyResult = CreateKlassSchema.safeParse(req.body)
    if(!bodyResult.success){
      const validationError = fromZodError(bodyResult.error)
      res.status(400).json({message: validationError.message})
      return
    }
    const klass = await this.repository.create(bodyResult.data)
    res.status(201).json(klass)
  }
  @Patch('/:id')
  async update(req: Request, res: Response) {
    let id: number
    try{
      id = parseInt(req.params.id)
    }catch(error){
      res.status(400).json({message: "Id url param must be a number"})
      return
    }
    const bodyResult = UpdateKlassSchema.safeParse(req.body)
    if(!bodyResult.success){
      const validationError = fromZodError(bodyResult.error)
      res.status(400).json({message: validationError.message})
      return
    }
    let klass = await this.repository.readOne({ id })
    if(!klass){
      res.sendStatus(404)
      return
    }
    klass = await this.repository.update({id: klass.id}, bodyResult.data)
    return klass
  }
  @Delete('/:id')
  async delete(req: Request, res: Response) {
    let id: number
    try{
      id = parseInt(req.params.id)
    }catch(error){
      res.status(400).json({message: "Id url param must be a number"})
      return
    }
    await this.repository.delete({ id })
    res.status(200)
  }
}
