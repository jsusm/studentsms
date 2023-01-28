import { Session } from './session.model'

export type CreateSessionData = Omit<Session, 'id'>
export type UpdateSessionData = {date: Date, duration: number}

export interface SessionRepository {
  create(data: CreateSessionData): Promise<Session>
  update(criteria: { id: number }, data: UpdateSessionData): Promise<Session>
  delete(criteria: { id: number }): Promise<Session>
  readOne(criteria: { id: number }): Promise<Session | null>
  read(): Promise<Array<Session>>
}
