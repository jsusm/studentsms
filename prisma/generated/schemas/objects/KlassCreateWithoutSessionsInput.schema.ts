import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.KlassCreateWithoutSessionsInput> = z
  .object({
    title: z.string(),
    name: z.string(),
    pph: z.number(),
  })
  .strict();

export const KlassCreateWithoutSessionsInputObjectSchema = Schema;
