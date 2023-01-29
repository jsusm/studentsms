import { Request, Response } from 'express'
import { Delete, Get, Patch, Post } from '../lib/controller/methodDecorators'
import { KlassInteractor } from './klass.interactor';
import { CreateKlassSchema, UpdateKlassSchema } from './klass.schema';
import { fromZodError } from 'zod-validation-error';

export class KlassController {
  interactor: KlassInteractor
  constructor(interactor: KlassInteractor) {
    this.interactor = interactor
  }
  @Get('/')
  async findAll(req: Request, res: Response) {
    res.json(await this.interactor.read())
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
    const result = await this.interactor.readOne({id})
    if(!result){
      res.sendStatus(404)
      return
    }
    res.json(result)
  }
  @Post('/')
  async create(req: Request, res: Response) {
    const bodyResult = CreateKlassSchema.safeParse(req.body)
    if(!bodyResult.success){
      const validationError = fromZodError(bodyResult.error)
      res.status(400).json({message: validationError.message})
      return
    }
    const klass = await this.interactor.create(bodyResult.data)
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
    let klass = await this.interactor.readOne({ id })
    if(!klass){
      res.sendStatus(404)
      return
    }
    klass = await this.interactor.update({id: klass.id}, bodyResult.data)
    const sessions = await this.interactor.readKlassSessions({ id })
    res.status(200).json({klass, sessions})
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
    await this.interactor.delete({ id })
    res.status(200)
  }
}
