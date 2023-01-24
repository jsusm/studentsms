import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    sessionId: z.literal(true).optional(),
  })
  .strict();

export const PaymentSumAggregateInputObjectSchema = Schema;
