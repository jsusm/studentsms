import { z } from 'zod'

export const CreateKlassSchema = z.object({
  title: z.string(),
  name: z.string(),
  pph: z.number().int(),
}).strict()

export const UpdateKlassSchema = z.object({
  title: z.string().optional(),
  name: z.string().optional(),
  pph: z.number().int().optional(),
})
