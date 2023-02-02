import { Session } from '../sessions/session.model'
import { Student } from './student.model'
import { CreateStudentData, StudentRepository } from './student.repository'

export class StudentMockRepository implements StudentRepository {
  public data: Student[] = [
    {
      id: 1,
      name: 'Test Student #1',
      lastName: 'Test LastName', 
      bornDate: new Date('1995-12-17T00:00:00'),
      description: 'This student was created for tests propouses',
      contactNumber: '+54 412-563-2095',
    },
    {
      id: 2,
      name: 'Test Student #2',
      lastName: 'Test LastName', 
      bornDate: new Date('1995-12-17T00:00:00'),
      description: 'This student was created for tests propouses',
      contactNumber: '+54 412-563-2095',
    }
  ]
  private async find(criteria: { id: number }) {
    const student = this.data.find(s => s.id === criteria.id)
    if(!student) throw new Error(`Student with id: ${criteria.id} does not exist.`)
    return student
  }
  async read(): Promise<Student[]> {
    return this.data    
  }
  async create(data: CreateStudentData): Promise<Student> {
    return { ...data, id: 1 }
  }
  async update(criteria: { id: number }, data: Partial<CreateStudentData>): Promise<Student> {
    return { ...this.find(criteria), ...data}
  }
  async delete(criteria: { id: number }): Promise<Student> {
    return this.find(criteria)
  }
  async readOne(criteria: { id: number }): Promise<Student | null> {
    return this.find(criteria)
  }
  async readOneAndRelated(criteria: { id: number }): Promise<{ student: Student; sessions: Session[] } | null> {
    const student = await this.find(criteria)
    return { student, sessions: [] }
  }
}
