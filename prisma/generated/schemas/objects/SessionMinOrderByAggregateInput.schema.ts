import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    duration: z.lazy(() => SortOrderSchema).optional(),
    attended: z.lazy(() => SortOrderSchema).optional(),
    klassId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const SessionMinOrderByAggregateInputObjectSchema = Schema;
