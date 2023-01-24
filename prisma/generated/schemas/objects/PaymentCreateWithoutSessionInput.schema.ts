import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentCreateWithoutSessionInput> = z
  .object({
    at: z.date(),
  })
  .strict();

export const PaymentCreateWithoutSessionInputObjectSchema = Schema;
