import { z } from 'zod'

const contactNumberRegexp = /^\+\d\d \d\d\d-\d\d\d-\d\d\d\d$/

export const CreateStudentSchema = z.object({
  name: z.string().max(100),
  lastName: z.string().max(100),
  contactNumber: z.string().regex(contactNumberRegexp),
  bornDate: z.string().datetime(),
  description: z.string().default(''),
})

export const UpdateStudentSchema = z.object({
  name: z.string().max(100),
  lastName: z.string().max(100),
  contactNumber: z.string().regex(contactNumberRegexp),
  bornDate: z.string().datetime(),
  description: z.string().max(254),
}).partial()
