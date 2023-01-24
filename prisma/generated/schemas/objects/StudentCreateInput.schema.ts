import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudentCreateInput> = z
  .object({
    name: z.string(),
    lastName: z.string(),
    contactNumber: z.string(),
    bornDate: z.date(),
    description: z.string(),
  })
  .strict();

export const StudentCreateInputObjectSchema = Schema;
