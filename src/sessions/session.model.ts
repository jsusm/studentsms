export class Session {
  id: number
  date: Date
  duration: number
  klassId: number
  sessionId: number
  constructor(data: {id: number, date: Date, duration: number, klassId: number, sessionId: number}){
    this.id = data.id
    this.date = data.date
    this.duration = data.duration
    this.klassId = data.klassId
    this.sessionId = data.sessionId
  }
}
