import type { NextFunction, Request, Response } from "express"
import express from "express";
import { PrismaClient } from '@prisma/client'
import { StudentCreateOneSchema, StudentUpdateOneSchema } from "../../prisma/generated/schemas";
import { z } from "zod";

const router = express.Router()
const prisma = new PrismaClient()

const findParams = z.object({ id: z.coerce.number().int() })

router.get('/', async (req: Request, res: Response) => {
  const students = await prisma.student.findMany()
  res.json(students)
})

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = findParams.parse(req.params)
    const student = await prisma.student.findUnique({
      where: { id }
    })
    if (!student) {
      res.sendStatus(404)
      return
    }
    res.json(student)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = StudentCreateOneSchema.shape.data.parse(req.body)
    const student = await prisma.student.create({data})
    res.status(201).json(student)
  } catch (error) {
    next(error)
  }
})

router.patch('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = findParams.parse(req.params)
    const data = StudentUpdateOneSchema.shape.data.parse(req.body)
    const student = prisma.student.update({
      where: { id: id },
      data,
    })
    if (!student) {
      res.sendStatus(404)
      return
    }
    res.status(200).json(student)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = findParams.parse(req.params)
    const student = await prisma.student.delete({ where: { id } })
    if (!student) {
      res.sendStatus(404)
      return
    }
    res.status(200)
  } catch (error) {
    next(error)
  }
})

export default router
