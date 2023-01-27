import { Request, Response } from 'express'
import { StudentInteractor } from './student.interactor'
import { Delete, Get, Patch, Post } from '../lib/controller/methodDecorators'

export class StudentController{
  constructor(private interactor: StudentInteractor){}
  
  @Get('/')
  async find(req: Request, res: Response){
    res.json(await this.interactor.read())
  }
}
