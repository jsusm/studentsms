import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentUncheckedCreateWithoutSessionInput> = z
  .object({
    id: z.number().optional(),
    at: z.date(),
  })
  .strict();

export const PaymentUncheckedCreateWithoutSessionInputObjectSchema = Schema;
