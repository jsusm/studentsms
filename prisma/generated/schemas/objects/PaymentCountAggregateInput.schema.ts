import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    at: z.literal(true).optional(),
    sessionId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const PaymentCountAggregateInputObjectSchema = Schema;
