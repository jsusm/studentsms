import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { SessionRelationFilterObjectSchema } from './SessionRelationFilter.schema';
import { SessionWhereInputObjectSchema } from './SessionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PaymentWhereInputObjectSchema),
        z.lazy(() => PaymentWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PaymentWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PaymentWhereInputObjectSchema),
        z.lazy(() => PaymentWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    session: z
      .union([
        z.lazy(() => SessionRelationFilterObjectSchema),
        z.lazy(() => SessionWhereInputObjectSchema),
      ])
      .optional(),
    sessionId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const PaymentWhereInputObjectSchema = Schema;
