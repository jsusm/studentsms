import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.KlassSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    pph: z.literal(true).optional(),
  })
  .strict();

export const KlassSumAggregateInputObjectSchema = Schema;
