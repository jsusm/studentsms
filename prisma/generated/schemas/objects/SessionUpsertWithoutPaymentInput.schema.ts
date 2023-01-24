import { z } from 'zod';
import { SessionUpdateWithoutPaymentInputObjectSchema } from './SessionUpdateWithoutPaymentInput.schema';
import { SessionUncheckedUpdateWithoutPaymentInputObjectSchema } from './SessionUncheckedUpdateWithoutPaymentInput.schema';
import { SessionCreateWithoutPaymentInputObjectSchema } from './SessionCreateWithoutPaymentInput.schema';
import { SessionUncheckedCreateWithoutPaymentInputObjectSchema } from './SessionUncheckedCreateWithoutPaymentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionUpsertWithoutPaymentInput> = z
  .object({
    update: z.union([
      z.lazy(() => SessionUpdateWithoutPaymentInputObjectSchema),
      z.lazy(() => SessionUncheckedUpdateWithoutPaymentInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SessionCreateWithoutPaymentInputObjectSchema),
      z.lazy(() => SessionUncheckedCreateWithoutPaymentInputObjectSchema),
    ]),
  })
  .strict();

export const SessionUpsertWithoutPaymentInputObjectSchema = Schema;
