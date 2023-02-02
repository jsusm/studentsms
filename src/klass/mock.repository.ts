import { throws } from "assert";
import { Session } from "../sessions/session.model";
import { Klass } from "./klass.model";
import { KlassRepository } from "./klass.repository";

export const klassMockData: Array<Klass> = [
  {
    id: 1,
    pph: 1,
    title: "Test Klass 0"
  },
  {
    id: 2,
    pph: 1,
    title: "Test Klass 1"
  },
  {
    id: 3,
    pph: 3,
    title: "Test Klass 2"
  }
]

export class KlassMockRepository implements KlassRepository {
  data = [...klassMockData]

  async read(): Promise<Klass[]> {
    return this.data
  }
  async readOne(criteria: { id: number; }): Promise<Klass | null> {
    return this.data.find(k => k.id === criteria.id) || null
  }
  async update(criteria: { id: number; }, data: { title?: string | undefined; pph?: number | undefined; }): Promise<Klass> {
    const klass = await this.readOne(criteria)
    if(!klass) throw new Error("Klass does not exits")
    return {...klass, ...data}
  }
  async create(data: { title: string; pph: number; }): Promise<Klass> {
    return { ...data, id: 0 }
  }
  async readKlassSessions(criteria: { id: number; }): Promise<Session[] | null> {
    return []
  }
  async delete(criteria: { id: number; }): Promise<Klass> {
    const klass = await this.readOne(criteria)
    if(!klass) throw new Error("Klass does not exits")
    return klass
  }
} 
