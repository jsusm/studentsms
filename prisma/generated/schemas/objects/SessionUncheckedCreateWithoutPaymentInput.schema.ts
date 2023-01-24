import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionUncheckedCreateWithoutPaymentInput> = z
  .object({
    id: z.number().optional(),
    date: z.date(),
    duration: z.number(),
    attended: z.boolean().optional(),
    klassId: z.number(),
  })
  .strict();

export const SessionUncheckedCreateWithoutPaymentInputObjectSchema = Schema;
