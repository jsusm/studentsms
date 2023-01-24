import { z } from 'zod';
import { PaymentWhereInputObjectSchema } from './PaymentWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentRelationFilter> = z
  .object({
    is: z
      .lazy(() => PaymentWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => PaymentWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const PaymentRelationFilterObjectSchema = Schema;
