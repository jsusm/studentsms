import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    at: z.lazy(() => SortOrderSchema).optional(),
    sessionId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const PaymentCountOrderByAggregateInputObjectSchema = Schema;
