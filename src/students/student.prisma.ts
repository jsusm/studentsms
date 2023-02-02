import { PrismaClient } from "@prisma/client";
import { Session } from "../sessions/session.model";
import { Student } from "./student.model";
import { CreateStudentData, StudentRepository, UpdateStudentData } from "./student.repository";

export class StudentPrismaRepository implements StudentRepository {
  prisma: PrismaClient
  constructor() {
    this.prisma = new PrismaClient()
  }
  create(data: CreateStudentData): Promise<Student> {
    return this.prisma.student.create({ data })
  }
  update(criteria: { id: number; }, data: UpdateStudentData): Promise<Student> {
    return this.prisma.student.update({ where: criteria, data })
  }
  delete(criteria: { id: number; }): Promise<Student> {
    return this.prisma.student.delete({ where: criteria })
  }
  read(): Promise<Student[]> {
    return this.prisma.student.findMany()
  }
  readOne(criteria: { id: number; }): Promise<Student | null> {
    return this.prisma.student.findUnique({ where: criteria })
  }
  async readOneAndRelated(criteria: { id: number; }): Promise<{ student: Student; sessions: Session[]; } | null> {
    const result = await this.prisma.student.findUnique({
      where: criteria,
      include: {
        sessions: true,
      }
    })
    if(!result) return null
    const { sessions, ...student } = result
    return { student, sessions }
  }
}
