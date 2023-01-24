import { z } from 'zod';
import { KlassWhereInputObjectSchema } from './KlassWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.KlassRelationFilter> = z
  .object({
    is: z.lazy(() => KlassWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => KlassWhereInputObjectSchema).optional(),
  })
  .strict();

export const KlassRelationFilterObjectSchema = Schema;
