import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { KlassRelationFilterObjectSchema } from './KlassRelationFilter.schema';
import { KlassWhereInputObjectSchema } from './KlassWhereInput.schema';
import { PaymentRelationFilterObjectSchema } from './PaymentRelationFilter.schema';
import { PaymentWhereInputObjectSchema } from './PaymentWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SessionWhereInputObjectSchema),
        z.lazy(() => SessionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SessionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SessionWhereInputObjectSchema),
        z.lazy(() => SessionWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    date: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    duration: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    attended: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    klass: z
      .union([
        z.lazy(() => KlassRelationFilterObjectSchema),
        z.lazy(() => KlassWhereInputObjectSchema),
      ])
      .optional(),
    klassId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    payment: z
      .union([
        z.lazy(() => PaymentRelationFilterObjectSchema),
        z.lazy(() => PaymentWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const SessionWhereInputObjectSchema = Schema;
