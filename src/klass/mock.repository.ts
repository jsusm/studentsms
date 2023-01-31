import { Session } from "../sessions/session.model";
import { Klass } from "./klass.model";
import { KlassRepository } from "./klass.repository";

export const test_klass: Klass = {
  id: 0,
  pph: 1,
  title: "Test Klass"
}
export const test_klasses: Array<Klass> = [
  {
    id: 0,
    pph: 1,
    title: "Test Klass 0"
  },
  {
    id: 1,
    pph: 1,
    title: "Test Klass 1"
  },
  {
    id: 2,
    pph: 3,
    title: "Test Klass 2"
  }
]

export class KlassMockRepository implements KlassRepository {

  public mockedKlass: Klass = test_klass
  public mockedKlasses: Array<Klass> = []
  public returnNull = false

  async read(): Promise<Klass[]> {
    return this.mockedKlasses
  }
  async readOne(criteria: { id: number; }): Promise<Klass | null> {
    if (this.returnNull) return null
    this.mockedKlass.id = criteria.id
    return this.mockedKlass
  }
  async update(criteria: { id: number; }, data: { title?: string | undefined; pph?: number | undefined; }): Promise<Klass> {
    this.mockedKlass = { ...data, ...this.mockedKlass, id: criteria.id }
    return this.mockedKlass
  }
  async create(data: { title: string; pph: number; }): Promise<Klass> {
    return { ...data, id: 0 }
  }
  async readKlassSessions(criteria: { id: number; }): Promise<Session[] | null> {
    return []
  }
  async delete(criteria: { id: number; }): Promise<Klass> {
    this.mockedKlass.id = criteria.id
    return this.mockedKlass
  }
} 
