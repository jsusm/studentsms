import { KlassController } from './klass/klass.controller'
import { KlassPrismaRepository } from './klass/klass.prisma'
import { StudentController } from './students/student.controller'
import { StudentPrismaRepository } from './students/student.prisma'
import { SessionController } from './sessions/session.controller'
import { SessionPrismaRepository } from './sessions/session.prisma'
import { PaymentController } from './payments/payment.controller'
import { PaymentPrismaRepository } from './payments/payment.prisma'

export const controllerConfig = {
  'classes': new KlassController(new KlassPrismaRepository()),
  'students': new StudentController(new StudentPrismaRepository()),
  'sessions': new SessionController(new SessionPrismaRepository()),
  'payments': new PaymentController(new PaymentPrismaRepository()),
}
