import { z } from 'zod';
import { KlassCreateNestedOneWithoutSessionsInputObjectSchema } from './KlassCreateNestedOneWithoutSessionsInput.schema';
import { PaymentCreateNestedOneWithoutSessionInputObjectSchema } from './PaymentCreateNestedOneWithoutSessionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionCreateInput> = z
  .object({
    date: z.date(),
    duration: z.number(),
    attended: z.boolean().optional(),
    klass: z.lazy(() => KlassCreateNestedOneWithoutSessionsInputObjectSchema),
    payment: z
      .lazy(() => PaymentCreateNestedOneWithoutSessionInputObjectSchema)
      .optional(),
  })
  .strict();

export const SessionCreateInputObjectSchema = Schema;
