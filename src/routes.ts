import { Router } from "express"
import klassRouter from './klass/klass.router' 
import studentRouter from './students/students.router'
import sessionsRouter from './sessions/sessions.router'

const router = Router()
router.use('/classes', klassRouter)
router.use('/students', studentRouter)
router.use('/sessions', sessionsRouter)

export default router
