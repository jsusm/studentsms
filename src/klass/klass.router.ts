import type { NextFunction, Request, Response } from "express"
import express from "express";
import { PrismaClient } from '@prisma/client'
import { KlassCreateOneSchema, KlassUpdateOneSchema } from '../../prisma/generated/schemas'
import { z } from "zod";

const router = express.Router()
const prisma = new PrismaClient()

const findParams = z.object({ id: z.coerce.number().int() })

router.get('/', async (req: Request, res: Response) => {
  const klasses = await prisma.klass.findMany()
  res.json(klasses)
})

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = findParams.parse(req.params)
    const klass = await prisma.klass.findUnique({
      where: { id }
    })
    if (!klass) {
      res.sendStatus(404)
      return
    }
    res.json(klass)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = KlassCreateOneSchema.shape.data.parse(req.body)
    const klass = await prisma.klass.create({ data })
    res.status(201).json(klass)
  } catch (error) {
    next(error)
  }
})

router.patch('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = findParams.parse(req.params)
    const data = KlassUpdateOneSchema.shape.data.parse(req.body)
    const klass = prisma.klass.update({
      where: { id: id },
      data,
    })
    if (!klass) {
      res.sendStatus(404)
      return
    }
    res.status(200).json(klass)
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
