import { z } from 'zod';
import { PaymentCreateWithoutSessionInputObjectSchema } from './PaymentCreateWithoutSessionInput.schema';
import { PaymentUncheckedCreateWithoutSessionInputObjectSchema } from './PaymentUncheckedCreateWithoutSessionInput.schema';
import { PaymentCreateOrConnectWithoutSessionInputObjectSchema } from './PaymentCreateOrConnectWithoutSessionInput.schema';
import { PaymentWhereUniqueInputObjectSchema } from './PaymentWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentUncheckedCreateNestedOneWithoutSessionInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PaymentCreateWithoutSessionInputObjectSchema),
          z.lazy(() => PaymentUncheckedCreateWithoutSessionInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => PaymentCreateOrConnectWithoutSessionInputObjectSchema)
        .optional(),
      connect: z.lazy(() => PaymentWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const PaymentUncheckedCreateNestedOneWithoutSessionInputObjectSchema =
  Schema;
