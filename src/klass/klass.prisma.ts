import { PrismaClient } from "@prisma/client";
import { Klass } from "./klass.model";
import { KlassRepository } from "./klass.repository";

export class KlassPrismaRepository implements KlassRepository {
  prisma: PrismaClient
  constructor() {
    this.prisma = new PrismaClient()
  }
  create(data: { title: string; pph: number; }): Promise<Klass> {
    return this.prisma.klass.create({ data })
  }
  update(criteria: { id: number; }, data: { title?: string | undefined; pph?: number | undefined; }): Promise<Klass> {
    return this.prisma.klass.update({where: criteria, data})
  }
  delete(criteria: { id: number; }): Promise<Klass> {
    return this.prisma.klass.delete({where: criteria })
  }
  read(): Promise<Klass[]> {
    return this.prisma.klass.findMany()
  }
  readOne(criteria: { id: number; }): Promise<Klass | null> {
    return this.prisma.klass.findUnique({ where: criteria })
  }
}
