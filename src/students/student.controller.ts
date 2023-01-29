import { Request, Response } from 'express'
import { StudentInteractor } from './student.interactor'
import { Delete, Get, Patch, Post } from '../lib/controller/methodDecorators'
import { CreateStudentSchema, ResourceIdentifier, UpdateStudentSchema } from './student.schema'
import { fromZodError } from 'zod-validation-error'
import { Status } from '../lib/controller/statusDecorator'

export class StudentController {
  constructor(private interactor: StudentInteractor) { }

  @Get('/')
  async find(req: Request, res: Response) {
    return this.interactor.read()
  }
  @Get('/:id')
  async findOne(req: Request, res: Response) {
    const paramsResult = ResourceIdentifier.safeParse(req.params)
    if (!paramsResult.success) {
      res.status(400).json({ message: fromZodError(paramsResult.error).message })
      return
    }
    const { id } = paramsResult.data
    const student = this.interactor.readOne({ id })
    const sessions = this.interactor.readStudentSessions({id})
    return { student, sessions }
  }
  @Post('/')
  @Status(201)
  async create(req: Request, res: Response) {
    console.log(req.body)
    const bodyResults = CreateStudentSchema.safeParse(req.body)
    if (!bodyResults.success) {
      res.status(400).json({ message: fromZodError(bodyResults.error).message })
      return
    }
    return this.interactor.create(bodyResults.data)
  }
  @Patch('/:id')
  async update(req: Request, res: Response) {
    const paramsResult = ResourceIdentifier.safeParse(req.params)
    if (!paramsResult.success) {
      res.status(400).json({ message: fromZodError(paramsResult.error).message })
      return
    }
    const bodyResults = UpdateStudentSchema.safeParse(req.body)
    if (!bodyResults.success) {
      res.status(400).json({ message: fromZodError(bodyResults.error).message })
      return
    }
    const { id } = paramsResult.data
    let student = await this.interactor.readOne({ id })
    if(!student){
      res.sendStatus(404)
      return
    }
    student = await this.interactor.update({id}, bodyResults.data)
    return student
  }
  @Delete('/:id')
  @Status(200)
  async delete(req: Request, res: Response) {
    const paramsResult = ResourceIdentifier.safeParse(req.params)
    if (!paramsResult.success) {
      res.status(400).json({ message: fromZodError(paramsResult.error).message })
      return
    }
    const { id } = paramsResult.data
    await this.interactor.delete({ id })
  }
}
