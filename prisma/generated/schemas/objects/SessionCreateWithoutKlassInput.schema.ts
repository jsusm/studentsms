import { z } from 'zod';
import { PaymentCreateNestedOneWithoutSessionInputObjectSchema } from './PaymentCreateNestedOneWithoutSessionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionCreateWithoutKlassInput> = z
  .object({
    date: z.date(),
    duration: z.number(),
    attended: z.boolean().optional(),
    payment: z
      .lazy(() => PaymentCreateNestedOneWithoutSessionInputObjectSchema)
      .optional(),
  })
  .strict();

export const SessionCreateWithoutKlassInputObjectSchema = Schema;
