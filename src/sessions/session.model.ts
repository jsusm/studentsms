export class Session {
  id: number
  date: Date
  duration: number
  klassId: number
  studentId: number
  attended: boolean = false
  constructor(data: {id: number, date: Date, duration: number, klassId: number, studentId: number, attended?: boolean}){
    this.id = data.id
    this.date = data.date
    this.duration = data.duration
    this.klassId = data.klassId
    this.studentId = data.studentId
    if(data.attended){
      this.attended = data.attended
    }
  }
}
