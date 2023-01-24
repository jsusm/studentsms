import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    at: z.date(),
    sessionId: z.number(),
  })
  .strict();

export const PaymentUncheckedCreateInputObjectSchema = Schema;
