import { z } from 'zod'

export const ResourceIdentifier = z.object({
  id: z.coerce.number().int().gt(0)
})

export const CreateKlassSchema = z.object({
  title: z.string(),
  pph: z.number().int(),
}).strict()

export const UpdateKlassSchema = z.object({
  title: z.string().optional(),
  pph: z.number().int().optional(),
})
