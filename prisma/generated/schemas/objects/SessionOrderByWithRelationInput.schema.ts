import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { KlassOrderByWithRelationInputObjectSchema } from './KlassOrderByWithRelationInput.schema';
import { PaymentOrderByWithRelationInputObjectSchema } from './PaymentOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    duration: z.lazy(() => SortOrderSchema).optional(),
    attended: z.lazy(() => SortOrderSchema).optional(),
    klass: z.lazy(() => KlassOrderByWithRelationInputObjectSchema).optional(),
    klassId: z.lazy(() => SortOrderSchema).optional(),
    payment: z
      .lazy(() => PaymentOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const SessionOrderByWithRelationInputObjectSchema = Schema;
