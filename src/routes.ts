import { Router } from "express"
import klassRouter from './klass/klass.router' 
import studentRouter from './students/students.router'

const router = Router()
router.use('/classes', klassRouter)
router.use('/students', studentRouter)

export default router
