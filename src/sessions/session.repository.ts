import { Klass } from '../klass/klass.model'
import { Student } from '../students/student.model'
import { Session } from './session.model'

export type CreateSessionData = Omit<Omit<Session, 'id'>, 'attended'>
export type UpdateSessionData = {date: Date, duration: number}

export interface SessionRepository {
  create(data: CreateSessionData): Promise<Session>
  update(criteria: { id: number }, data: UpdateSessionData): Promise<Session>
  delete(criteria: { id: number }): Promise<Session>
  readOne(criteria: { id: number }): Promise<Session | null>
  readOneAndRelated(criteria: { id: number }): Promise<{session: Session, klass: Klass, student: Student} | null>
  read(): Promise<Array<Session>>
}
