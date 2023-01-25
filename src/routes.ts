import { Router } from "express"
import klassRouter from './klass/klass.router' 

const router = Router()
router.use('/classes', klassRouter)

export default router
