import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.KlassCreateManyInput> = z
  .object({
    id: z.number().optional(),
    title: z.string(),
    name: z.string(),
    pph: z.number(),
  })
  .strict();

export const KlassCreateManyInputObjectSchema = Schema;
