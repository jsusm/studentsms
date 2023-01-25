import type { Request, Response } from "express"
import express from "express";
import { PrismaClient } from '@prisma/client'
import { KlassCreateOneSchema } from '../../prisma/generated/schemas/createOneKlass.schema'

const router = express.Router()
const prisma = new PrismaClient()

router.get('/', async (req: Request, res: Response) => {
  const klasses = await prisma.klass.findMany()
  res.json(klasses)
})

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const klass = await prisma.klass.findUnique({
    where: { id: parseInt(id) }
  })
  if(!klass) {
    res.sendStatus(404)
    return
  }
  res.json(klass)
})

router.post('/', async (req: Request, res: Response) => {
  const data = KlassCreateOneSchema.parse(req.body)
  const klass = await prisma.klass.create(data)
  res.status(201).json(klass)
})

router.patch('/', async (req: Request, res: Response) => {
  const { id } = req.params
  const data = KlassCreateOneSchema.parse(req.body)
  const klass = prisma.klass.update({
    where: { id: parseInt(id) },
    data,
  })
  if(!klass){
    res.sendStatus(404)
    return
  }
  res.status(200).json(klass)
})

router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const klass = await prisma.klass.delete({ where: { id: parseInt(id) }})
  if(!klass){
    res.sendStatus(404)
    return
  }
  res.status(200)
})

export default router
