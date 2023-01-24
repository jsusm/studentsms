import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.KlassMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    name: z.literal(true).optional(),
    pph: z.literal(true).optional(),
  })
  .strict();

export const KlassMaxAggregateInputObjectSchema = Schema;
