import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudentCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    lastName: z.literal(true).optional(),
    contactNumber: z.literal(true).optional(),
    bornDate: z.literal(true).optional(),
    description: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const StudentCountAggregateInputObjectSchema = Schema;
