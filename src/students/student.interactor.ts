import { CreateStudentData, StudentRepository, UpdateStudentData } from './student.repository'

export class StudentInteractor {
  repository: StudentRepository
  constructor(repository: StudentRepository){
    this.repository = repository
  }
  async create(data: CreateStudentData){
    return await this.repository.create(data)
  }
  async update(criteria: {id: number}, data: UpdateStudentData){
    return await this.repository.update(criteria, data)
  }
  async delete(criteria: {id: number}){
    return await this.repository.delete(criteria)
  }
  async read(){
    return await this.repository.read()
  }
  async readOne(criteria: { id: number }){
    return await this.repository.readOne(criteria)
  }
  async readStudentSessions(criteria: { id: number }){
    return await this.repository.readStudentsSessions(criteria)
  }
}
