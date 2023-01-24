import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.KlassCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    name: z.literal(true).optional(),
    pph: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const KlassCountAggregateInputObjectSchema = Schema;
