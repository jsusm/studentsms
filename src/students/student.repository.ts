import { Student } from './student.model'

export type CreateStudentData = Omit<typeof Student, 'id'>
export type UpdateStudentData = Partial<CreateStudentData>

export interface StudentRepository {
  create(data: CreateStudentData): Promise<Student>
  update(criteria: { id: number }, data: UpdateStudentData): Promise<Student>
  delete(criteria: { id: number }): Promise<Student>
  readOne(criteria: { id: number }): Promise<Student | null>
  read(): Promise<Array<Student>>
}
