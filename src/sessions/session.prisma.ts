import { PrismaClient } from '@prisma/client'
import { Session } from './session.model'
import { CreateSessionData, SessionRepository, UpdateSessionData } from './session.repository'

export class SessionPrismaRepository implements SessionRepository {
  prisma: PrismaClient
  constructor() {
    this.prisma = new PrismaClient()
  }
  async create(data: CreateSessionData): Promise<Session> {
    return await this.prisma.session.create({ data })
  }
  async update(criteria: { id: number }, data: UpdateSessionData): Promise<Session> {
    return await this.prisma.session.update({
      where: criteria,
      data,
    })
  }
  async delete(criteria: { id: number }): Promise<Session> {
    return await this.prisma.session.delete({
      where: criteria,
    })
  }
  async read(): Promise<Session[]> {
    return this.prisma.session.findMany()
  }
  async readOne(criteria: { id: number }): Promise<Session | null> {
    return this.prisma.session.findUnique({ where: criteria })
  }
}
