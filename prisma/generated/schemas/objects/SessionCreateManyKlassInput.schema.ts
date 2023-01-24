import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionCreateManyKlassInput> = z
  .object({
    id: z.number().optional(),
    date: z.date(),
    duration: z.number(),
    attended: z.boolean().optional(),
  })
  .strict();

export const SessionCreateManyKlassInputObjectSchema = Schema;
