import { Delete, Get, Post } from "../lib/controller/methodDecorators";
import { PaymentRepository } from "./payment.repository";
import { CreatePaymentSchema, ResourceIdentifier } from './payment.schema'
import { Request, Response } from 'express'
import { Status } from "../lib/controller/statusDecorator";

export class PaymentController {
  constructor(private repository: PaymentRepository){}
  @Get('/')
  async find(){
    return await this.repository.read()
  }
  @Get('/:id')
  async findOne(req: Request, res: Response){
    const { id } = ResourceIdentifier.parse(req.params)
    const payment = await this.repository.readOne({id})
    if(!payment){
      res.sendStatus(404)
      return
    }
    return payment
  }
  @Post('/')
  @Status(201)
  async create(req: Request, res: Response) {
    const data = CreatePaymentSchema.parse(req.body)
    return await this.repository.create(data)
  }
  @Delete('/:id')
  async delete(req: Request, res: Response) {
    const { id } = ResourceIdentifier.parse(req.params)
    const payment = await this.repository.readOne({id})
    if(!payment){
      res.sendStatus(404)
      return
    }
    await this.repository.delete({id})
    res.sendStatus(200)
  }
}
