import type { Request, Response } from 'express'
import { fromZodError } from 'zod-validation-error'
import { Delete, Get, Patch, Post } from '../lib/controller/methodDecorators'
import { Status } from '../lib/controller/statusDecorator'
import { SessionInteractor } from './session.interactor'
import { CreateSessionSchema, ResourceIdentifier } from './sessions.schema'

export class SessionController {
  constructor(public interactor: SessionInteractor){ }
  @Get('/')
  async find(req: Request, res: Response){
    return this.interactor.read()
  }
  @Get('/:id')
  async findOne(req: Request, res: Response){
    const paramsResult = ResourceIdentifier.safeParse(req.params)
    if(!paramsResult.success){
      res.status(400).json({message: fromZodError(paramsResult.error).message})
      return
    }
    const { id } = paramsResult.data
    return this.interactor.readOneAndRelated({id})
  }
  @Post('/')
  @Status(201)
  async create(req: Request, res: Response) {
    console.log(req.body)
    const bodyResult = CreateSessionSchema.safeParse(req.body)
    if(!bodyResult.success){
      res.status(400).json({message: fromZodError(bodyResult.error).message})
      return
    }
    return this.interactor.create(bodyResult.data)
  }
  @Patch('/:id')
  async update(req: Request, res: Response) {
    const paramsResult = ResourceIdentifier.safeParse(req.params)
    if(!paramsResult.success){
      res.status(400).json({message: fromZodError(paramsResult.error).message})
      return
    }
    const bodyResult = CreateSessionSchema.safeParse(req.body)
    if(!bodyResult.success){
      res.status(400).json({message: fromZodError(bodyResult.error).message})
      return
    }
    const { id } = paramsResult.data
    let session = await this.interactor.readOne({ id })
    if(!session){
      res.status(404)
      return
    }
    session = await this.interactor.update({id}, bodyResult.data)
    return session
  }
  @Delete('/')
  @Status(200)
  async delete(req: Request, res: Response) {
    const paramsResult = ResourceIdentifier.safeParse(req.params)
    if(!paramsResult.success){
      res.status(400).json({message: fromZodError(paramsResult.error).message})
      return
    }
    const { id } = paramsResult.data
    this.interactor.delete({id})
  }
}
