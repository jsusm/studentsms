import { controlerLoader } from './lib/controller/controllerLoader'
import { KlassController } from './klass/klass.controller'
import { KlassPrismaRepository } from './klass/klass.prisma'
import { StudentController } from './students/student.controller'
import { StudentInteractor } from './students/student.interactor'
import { StudentPrismaRepository } from './students/student.prisma'
import { SessionController } from './sessions/session.controller'
import { SessionPrismaRepository } from './sessions/session.prisma'

const controllers = {
  'classes': new KlassController(new KlassPrismaRepository()),
  'students': new StudentController(new StudentInteractor(new StudentPrismaRepository())),
  'sessions': new SessionController(new SessionPrismaRepository()),
}

export const controllerRouter = controlerLoader(controllers)
