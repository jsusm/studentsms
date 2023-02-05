import { z } from 'zod'

export const ResourceIdentifier = z.object({
  id: z.coerce.number().int().gt(0)
})
export const CreatePaymentSchema = z.object({
  at: z.coerce.date(),
  sessionId: z.number().int().gt(0),
}).strict()
