import type { NextFunction, Request, Response } from "express"
import express from "express";
import { PrismaClient } from '@prisma/client'
import { z } from "zod";
import { CreateSessionSchema, UpdateSesssionSchema } from './sessions.schema'

const router = express.Router()
const prisma = new PrismaClient()

const findParams = z.object({ id: z.coerce.number().int() })

router.get('/', async (req: Request, res: Response) => {
  const sessions = await prisma.session.findMany()
  res.json(sessions)
})

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = findParams.parse(req.params)
    const session = await prisma.session.findUnique({
      where: { id }
    })
    if (!session) {
      res.sendStatus(404)
      return
    }
    res.json(session)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = CreateSessionSchema.parse(req.body)
    const session = await prisma.session.create({ data })
    res.status(201).json(session)
  } catch (error) {
    next(error)
  }
})

router.patch('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = findParams.parse(req.params)
    const data = UpdateSesssionSchema.parse(req.body)
    const sessions = prisma.session.update({
      where: { id: id },
      data,
    })
    if (!sessions) {
      res.sendStatus(404)
      return
    }
    res.status(200).json(sessions)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = findParams.parse(req.params)
    const klass = await prisma.klass.delete({ where: { id } })
    if (!klass) {
      res.sendStatus(404)
      return
    }
    res.status(200)
  } catch (error) {
    next(error)
  }
})

export default router
