import { Session } from '../sessions/session.model'
import { Klass } from './klass.model'

export interface KlassRepository {
  create(data: { title: string, pph: number }): Promise<Klass>
  update(criteria: { id: number }, data: { title?: string, pph?: number }): Promise<Klass>
  delete(criteria: { id: number }): Promise<Klass>
  readOne(criteria: { id: number }): Promise<Klass | null>
  readOneAndRelated(criteria: { id: number }): Promise<{klass: Klass, sessions: Array<Session>} | null>
  read(): Promise<Array<Klass>>
}
