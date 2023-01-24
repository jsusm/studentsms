import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentCreateManyInput> = z
  .object({
    id: z.number().optional(),
    at: z.date(),
    sessionId: z.number(),
  })
  .strict();

export const PaymentCreateManyInputObjectSchema = Schema;
