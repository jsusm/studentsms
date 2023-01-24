import { z } from 'zod';
import { PaymentWhereUniqueInputObjectSchema } from './PaymentWhereUniqueInput.schema';
import { PaymentCreateWithoutSessionInputObjectSchema } from './PaymentCreateWithoutSessionInput.schema';
import { PaymentUncheckedCreateWithoutSessionInputObjectSchema } from './PaymentUncheckedCreateWithoutSessionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentCreateOrConnectWithoutSessionInput> = z
  .object({
    where: z.lazy(() => PaymentWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PaymentCreateWithoutSessionInputObjectSchema),
      z.lazy(() => PaymentUncheckedCreateWithoutSessionInputObjectSchema),
    ]),
  })
  .strict();

export const PaymentCreateOrConnectWithoutSessionInputObjectSchema = Schema;
