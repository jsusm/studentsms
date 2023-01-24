import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    date: z.literal(true).optional(),
    duration: z.literal(true).optional(),
    attended: z.literal(true).optional(),
    klassId: z.literal(true).optional(),
  })
  .strict();

export const SessionMaxAggregateInputObjectSchema = Schema;
