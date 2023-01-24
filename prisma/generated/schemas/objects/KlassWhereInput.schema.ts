import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { SessionListRelationFilterObjectSchema } from './SessionListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.KlassWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => KlassWhereInputObjectSchema),
        z.lazy(() => KlassWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => KlassWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => KlassWhereInputObjectSchema),
        z.lazy(() => KlassWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    pph: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const KlassWhereInputObjectSchema = Schema;
