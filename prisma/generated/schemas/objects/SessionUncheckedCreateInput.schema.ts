import { z } from 'zod';
import { PaymentUncheckedCreateNestedOneWithoutSessionInputObjectSchema } from './PaymentUncheckedCreateNestedOneWithoutSessionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    date: z.date(),
    duration: z.number(),
    attended: z.boolean().optional(),
    klassId: z.number(),
    payment: z
      .lazy(
        () => PaymentUncheckedCreateNestedOneWithoutSessionInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SessionUncheckedCreateInputObjectSchema = Schema;
