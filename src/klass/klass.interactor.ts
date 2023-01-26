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
  async update(data: {title?: string, pph?: number}) {
    const klass = await this.repository.update(data)
    return klass
  }
  async delete(data: {id: number}) {
    await this.repository.delete(data)
  }
  async read() {
    return await this.repository.read()
  }
  async readOne(data: {id: number}) {
    return await this.repository.readOne(data)
  }
}
