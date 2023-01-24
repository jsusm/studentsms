import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SessionCountOrderByAggregateInputObjectSchema } from './SessionCountOrderByAggregateInput.schema';
import { SessionAvgOrderByAggregateInputObjectSchema } from './SessionAvgOrderByAggregateInput.schema';
import { SessionMaxOrderByAggregateInputObjectSchema } from './SessionMaxOrderByAggregateInput.schema';
import { SessionMinOrderByAggregateInputObjectSchema } from './SessionMinOrderByAggregateInput.schema';
import { SessionSumOrderByAggregateInputObjectSchema } from './SessionSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    duration: z.lazy(() => SortOrderSchema).optional(),
    attended: z.lazy(() => SortOrderSchema).optional(),
    klassId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => SessionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => SessionAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => SessionMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => SessionMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => SessionSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const SessionOrderByWithAggregationInputObjectSchema = Schema;
