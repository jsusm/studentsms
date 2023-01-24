import { z } from 'zod';
import { SessionWhereInputObjectSchema } from './SessionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionRelationFilter> = z
  .object({
    is: z.lazy(() => SessionWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => SessionWhereInputObjectSchema).optional(),
  })
  .strict();

export const SessionRelationFilterObjectSchema = Schema;
