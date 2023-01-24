import { z } from 'zod';
import { SessionCreateManyKlassInputObjectSchema } from './SessionCreateManyKlassInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionCreateManyKlassInputEnvelope> = z
  .object({
    data: z.lazy(() => SessionCreateManyKlassInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const SessionCreateManyKlassInputEnvelopeObjectSchema = Schema;
