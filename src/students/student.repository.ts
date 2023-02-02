import { Session } from '../sessions/session.model'
import { Student } from './student.model'

export type CreateStudentData = Omit<Student, 'id'>

export type UpdateStudentData = Partial<CreateStudentData>

export interface StudentRepository {
  create(data: CreateStudentData): Promise<Student>
  update(criteria: { id: number }, data: UpdateStudentData): Promise<Student>
  delete(criteria: { id: number }): Promise<Student>
  readOne(criteria: { id: number }): Promise<Student | null>
  readOneAndRelated(criteria: { id: number }): Promise<{student: Student, sessions: Session[]} | null>
  read(): Promise<Array<Student>>
}
