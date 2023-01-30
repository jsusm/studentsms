import { CreateSessionData, SessionRepository, UpdateSessionData } from "./session.repository";

export class SessionInteractor {
  repository: SessionRepository
  constructor(repository: SessionRepository){
    this.repository = repository
  }
  async read(){
    return await this.repository.read()
  }
  async readOne(criteria: {id: number}){
    return await this.repository.readOne(criteria)
  }
  async readOneAndRelated(criteria: {id: number}){
    return await this.repository.readOneAndRelated(criteria)
  }
  async create(data: CreateSessionData){
    const session = await this.repository.create(data)
    return session
  }
  async update(criteria: {id: number}, data: UpdateSessionData) {
    const session = await this.repository.update(criteria, data)
    return session
  }
  async delete(criteria: {id: number}){
    await this.repository.delete(criteria)
  }
}
