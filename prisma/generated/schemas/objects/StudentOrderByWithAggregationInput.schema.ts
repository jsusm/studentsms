import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { StudentCountOrderByAggregateInputObjectSchema } from './StudentCountOrderByAggregateInput.schema';
import { StudentAvgOrderByAggregateInputObjectSchema } from './StudentAvgOrderByAggregateInput.schema';
import { StudentMaxOrderByAggregateInputObjectSchema } from './StudentMaxOrderByAggregateInput.schema';
import { StudentMinOrderByAggregateInputObjectSchema } from './StudentMinOrderByAggregateInput.schema';
import { StudentSumOrderByAggregateInputObjectSchema } from './StudentSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudentOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    lastName: z.lazy(() => SortOrderSchema).optional(),
    contactNumber: z.lazy(() => SortOrderSchema).optional(),
    bornDate: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => StudentCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => StudentAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => StudentMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => StudentMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => StudentSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const StudentOrderByWithAggregationInputObjectSchema = Schema;
