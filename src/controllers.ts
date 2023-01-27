import { controlerLoader } from './lib/controller/controllerLoader'
import { KlassController } from './klass/klass.controller'
import { KlassInteractor } from './klass/klass.interactor'
import { KlassPrismaRepository } from './klass/klass.prisma'
import { StudentController } from './students/student.controller'
import { StudentInteractor } from './students/student.interactor'
import { StudentPrismaRepository } from './students/student.prisma'

const controllers = {
  'classes': new KlassController(new KlassInteractor(new KlassPrismaRepository())),
  'students': new StudentController(new StudentInteractor(new StudentPrismaRepository())),
}

export const controllerRouter = controlerLoader(controllers)
