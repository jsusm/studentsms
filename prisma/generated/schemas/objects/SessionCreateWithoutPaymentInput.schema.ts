import { z } from 'zod';
import { KlassCreateNestedOneWithoutSessionsInputObjectSchema } from './KlassCreateNestedOneWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionCreateWithoutPaymentInput> = z
  .object({
    date: z.date(),
    duration: z.number(),
    attended: z.boolean().optional(),
    klass: z.lazy(() => KlassCreateNestedOneWithoutSessionsInputObjectSchema),
  })
  .strict();

export const SessionCreateWithoutPaymentInputObjectSchema = Schema;
