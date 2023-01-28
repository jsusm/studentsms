import { z } from 'zod'

export const CreateSessionSchema = z.object({
  date: z.string().datetime(),
  duration: z.number().int().gt(0),
  klassId: z.number().int(),
  studentId: z.number().int(),
}).strict()

export const UpdateSesssionSchema = z.object({
  date: z.string().datetime().optional(),
  duration: z.number().int().gt(1).optional(),
}).strict()
