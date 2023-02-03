import { Request, Response } from 'express'
import { Delete, Get, Patch, Post } from '../lib/controller/methodDecorators'
import { CreateStudentSchema, ResourceIdentifier, UpdateStudentSchema } from './student.schema'
import { Status } from '../lib/controller/statusDecorator'
import { StudentRepository } from './student.repository'

export class StudentController {
  constructor(private repository: StudentRepository) { }

  @Get('/')
  async find(req: Request, res: Response) {
    return this.repository.read()
  }
  @Get('/:id')
  async findOne(req: Request, res: Response) {
    const { id } = ResourceIdentifier.parse(req.params)
    const result = await this.repository.readOneAndRelated({ id })
    if(!result){
      res.sendStatus(404)
      return
    }
    return result
  }
  @Post('/')
  @Status(201)
  async create(req: Request, res: Response) {
    const data = CreateStudentSchema.parse(req.body)
    return this.repository.create(data)
  }
  @Patch('/:id')
  async update(req: Request, res: Response) {
    const { id } = ResourceIdentifier.parse(req.params)
    const data = UpdateStudentSchema.parse(req.body)
    let student = await this.repository.readOne({ id })
    if(!student){
      res.sendStatus(404)
      return
    }
    student = await this.repository.update({id}, data)
    return student
  }
  @Delete('/:id')
  @Status(200)
  async delete(req: Request, res: Response) {
    const { id } = ResourceIdentifier.parse(req.params)
    let student = await this.repository.readOne({ id })
    if(!student){
      res.sendStatus(404)
      return
    }
    await this.repository.delete({ id })
  }
}
