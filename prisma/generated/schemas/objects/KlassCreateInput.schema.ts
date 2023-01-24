import { z } from 'zod';
import { SessionCreateNestedManyWithoutKlassInputObjectSchema } from './SessionCreateNestedManyWithoutKlassInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.KlassCreateInput> = z
  .object({
    title: z.string(),
    name: z.string(),
    pph: z.number(),
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutKlassInputObjectSchema)
      .optional(),
  })
  .strict();

export const KlassCreateInputObjectSchema = Schema;
