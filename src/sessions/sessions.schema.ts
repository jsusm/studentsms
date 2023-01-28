import { z } from 'zod'

export const ResourceIdentifier = z.object({
  id: z.coerce.number().int().gt(0)
})

export const CreateSessionSchema = z.object({
  date: z.coerce.date(),
  duration: z.number().int().gt(0),
  klassId: z.number().int(),
  studentId: z.number().int(),
}).strict()

export const UpdateSesssionSchema = z.object({
  date: z.coerce.date().optional(),
  duration: z.number().int().gt(1).optional(),
}).strict()
