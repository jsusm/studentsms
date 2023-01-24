import { z } from 'zod';
import { PaymentUpdateWithoutSessionInputObjectSchema } from './PaymentUpdateWithoutSessionInput.schema';
import { PaymentUncheckedUpdateWithoutSessionInputObjectSchema } from './PaymentUncheckedUpdateWithoutSessionInput.schema';
import { PaymentCreateWithoutSessionInputObjectSchema } from './PaymentCreateWithoutSessionInput.schema';
import { PaymentUncheckedCreateWithoutSessionInputObjectSchema } from './PaymentUncheckedCreateWithoutSessionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentUpsertWithoutSessionInput> = z
  .object({
    update: z.union([
      z.lazy(() => PaymentUpdateWithoutSessionInputObjectSchema),
      z.lazy(() => PaymentUncheckedUpdateWithoutSessionInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PaymentCreateWithoutSessionInputObjectSchema),
      z.lazy(() => PaymentUncheckedCreateWithoutSessionInputObjectSchema),
    ]),
  })
  .strict();

export const PaymentUpsertWithoutSessionInputObjectSchema = Schema;
