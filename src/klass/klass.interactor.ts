import { KlassRepository } from "./klass.repository";

export class KlassInteractor {
  repository: KlassRepository
  constructor(repository: KlassRepository){
    this.repository = repository
  }
  async create(data: {title: string, pph: number}){
    const klass = await this.repository.create(data)
    return klass
  }
  async update(criteria: {id: number }, data: {title?: string, pph?: number}) {
    const klass = await this.repository.update(criteria, data)
    return klass
  }
  async delete(criteria: {id: number}) {
    await this.repository.delete(criteria)
  }
  async read() {
    return await this.repository.read()
  }
  async readOne(criteria: {id: number}) {
    return await this.repository.readOne(criteria)
  }
  async readKlassSessions(criteria: {id: number}){
    return await this.repository.readKlassSessions(criteria)
  }
}
