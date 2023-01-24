import { z } from 'zod';
import { SessionCreateNestedOneWithoutPaymentInputObjectSchema } from './SessionCreateNestedOneWithoutPaymentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentCreateInput> = z
  .object({
    at: z.date(),
    session: z.lazy(
      () => SessionCreateNestedOneWithoutPaymentInputObjectSchema,
    ),
  })
  .strict();

export const PaymentCreateInputObjectSchema = Schema;
