import { Klass } from '../klass/klass.model'
import { Student } from '../students/student.model'
import { Session } from './session.model'
import { CreateSessionData, SessionRepository, UpdateSessionData } from './session.repository'
import { klassMockData } from '../klass/mock.repository'
import { studentMockData } from '../students/mock.repository'

export const sessionMockData: Session[] = [
  {
    id: 1,
    date: new Date(2023, 5, 20),
    klassId: 1,
    attended: false,
    duration: 2,
    studentId: 1,
  },
  {
    id: 2,
    date: new Date(2023, 4, 20),
    klassId: 1,
    attended: true,
    duration: 2,
    studentId: 2,
  },
]

export class SessionMockRepository implements SessionRepository {
  private data = [...sessionMockData]
  private findAndThrow(criteria: { id: number }) {
    const session = this.data.find(s => s.id === criteria.id)
    if (!session) throw new Error(`Session with id ${criteria.id} doesn't exist`)
    return session
  }
  async read(): Promise<Session[]> {
    return this.data
  }
  async readOne(criteria: { id: number }): Promise<Session | null> {
    return this.data.find(s => s.id === criteria.id) || null
  }
  async create(data: CreateSessionData): Promise<Session> {
    return { ...data, attended: false, id: 3 }
  }
  async update(criteria: { id: number }, data: UpdateSessionData): Promise<Session> {
    const session = this.findAndThrow(criteria)
    return { ...session, ...data }
  }
  async delete(criteria: { id: number }): Promise<Session> {
    return this.findAndThrow(criteria)
  }
  async readOneAndRelated(criteria: { id: number }): Promise<{ session: Session; klass: Klass; student: Student } | null> {
    const session = await this.readOne(criteria)
    if (!session) return null
    return { session, klass: klassMockData[0], student: studentMockData[0] }
  }
}
