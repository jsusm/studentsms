import { Request, Response } from 'express'
import { Get } from '../lib/controller/methodDecorators'
import { KlassInteractor } from './klass.interactor';

export class KlassController {
  interactor: KlassInteractor
  constructor(interactor: KlassInteractor) {
    this.interactor = interactor
  }
  @Get('/')
  async findAll(req: Request, res: Response) {
    res.json(await this.interactor.read())
  }
}
