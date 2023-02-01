import { controlerLoader } from './lib/controller/controllerLoader'
import { KlassController } from './klass/klass.controller'
import { KlassInteractor } from './klass/klass.interactor'
import { KlassPrismaRepository } from './klass/klass.prisma'
import { StudentController } from './students/student.controller'
import { StudentInteractor } from './students/student.interactor'
import { StudentPrismaRepository } from './students/student.prisma'
import { SessionController } from './sessions/session.controller'
import { SessionPrismaRepository } from './sessions/session.prisma'
import { SessionInteractor } from './sessions/session.interactor'

const controllers = {
  'classes': new KlassController(new KlassInteractor(new KlassPrismaRepository()), new KlassPrismaRepository()),
  'students': new StudentController(new StudentInteractor(new StudentPrismaRepository())),
  'sessions': new SessionController(new SessionInteractor(new SessionPrismaRepository()))
}

export const controllerRouter = controlerLoader(controllers)
