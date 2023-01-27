import { Student } from './student.model'

export interface StudentRepository {
  create(data: { title: string, pph: number }): Promise<Student>
  update(criteria: { id: number }, data: { title?: string, pph?: number }): Promise<Student>
  delete(criteria: { id: number }): Promise<Student>
  readOne(criteria: { id: number }): Promise<Student | null>
  read(): Promise<Array<Student>>
}
