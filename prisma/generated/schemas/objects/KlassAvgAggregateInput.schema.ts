import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.KlassAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    pph: z.literal(true).optional(),
  })
  .strict();

export const KlassAvgAggregateInputObjectSchema = Schema;
