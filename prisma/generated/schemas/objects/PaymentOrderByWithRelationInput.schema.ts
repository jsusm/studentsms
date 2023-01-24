import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SessionOrderByWithRelationInputObjectSchema } from './SessionOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    at: z.lazy(() => SortOrderSchema).optional(),
    session: z
      .lazy(() => SessionOrderByWithRelationInputObjectSchema)
      .optional(),
    sessionId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const PaymentOrderByWithRelationInputObjectSchema = Schema;
