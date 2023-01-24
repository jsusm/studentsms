import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    sessionId: z.number().optional(),
  })
  .strict();

export const PaymentWhereUniqueInputObjectSchema = Schema;
