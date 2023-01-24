import { z } from 'zod';
import { SessionUncheckedCreateNestedManyWithoutKlassInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutKlassInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.KlassUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    title: z.string(),
    name: z.string(),
    pph: z.number(),
    sessions: z
      .lazy(() => SessionUncheckedCreateNestedManyWithoutKlassInputObjectSchema)
      .optional(),
  })
  .strict();

export const KlassUncheckedCreateInputObjectSchema = Schema;
