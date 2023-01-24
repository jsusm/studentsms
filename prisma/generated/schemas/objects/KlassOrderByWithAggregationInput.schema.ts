import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { KlassCountOrderByAggregateInputObjectSchema } from './KlassCountOrderByAggregateInput.schema';
import { KlassAvgOrderByAggregateInputObjectSchema } from './KlassAvgOrderByAggregateInput.schema';
import { KlassMaxOrderByAggregateInputObjectSchema } from './KlassMaxOrderByAggregateInput.schema';
import { KlassMinOrderByAggregateInputObjectSchema } from './KlassMinOrderByAggregateInput.schema';
import { KlassSumOrderByAggregateInputObjectSchema } from './KlassSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.KlassOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    pph: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => KlassCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => KlassAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => KlassMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => KlassMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => KlassSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const KlassOrderByWithAggregationInputObjectSchema = Schema;
