import { InteractorError, InteractorResult } from "../lib/interactor/interactorResult";
import { Session } from "./session.model";
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
  async update(criteria: {id: number}, data: UpdateSessionData): Promise<InteractorResult<Session>> {
    const session = await this.repository.readOne(criteria)
    if(!session) {
      return {
        success: false,
        error: new InteractorError(`Session with id ${criteria.id} does not exits.`, "notFound")
      }
    }
    if(session.attended) {
      return {
        success: false,
        error: new InteractorError(`Cannot update an attended session.`, "notAllowed")
      }
    }
    const updatedSession = await this.repository.update(criteria, data)
    return {
      success: true,
      data: updatedSession,
    }
  }
  async delete(criteria: {id: number}){
    await this.repository.delete(criteria)
  }
}
