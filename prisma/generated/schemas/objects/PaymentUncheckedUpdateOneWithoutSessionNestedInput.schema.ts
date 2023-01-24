import { z } from 'zod';
import { PaymentCreateWithoutSessionInputObjectSchema } from './PaymentCreateWithoutSessionInput.schema';
import { PaymentUncheckedCreateWithoutSessionInputObjectSchema } from './PaymentUncheckedCreateWithoutSessionInput.schema';
import { PaymentCreateOrConnectWithoutSessionInputObjectSchema } from './PaymentCreateOrConnectWithoutSessionInput.schema';
import { PaymentUpsertWithoutSessionInputObjectSchema } from './PaymentUpsertWithoutSessionInput.schema';
import { PaymentWhereUniqueInputObjectSchema } from './PaymentWhereUniqueInput.schema';
import { PaymentUpdateWithoutSessionInputObjectSchema } from './PaymentUpdateWithoutSessionInput.schema';
import { PaymentUncheckedUpdateWithoutSessionInputObjectSchema } from './PaymentUncheckedUpdateWithoutSessionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentUncheckedUpdateOneWithoutSessionNestedInput> =
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
      upsert: z
        .lazy(() => PaymentUpsertWithoutSessionInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => PaymentWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => PaymentUpdateWithoutSessionInputObjectSchema),
          z.lazy(() => PaymentUncheckedUpdateWithoutSessionInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const PaymentUncheckedUpdateOneWithoutSessionNestedInputObjectSchema =
  Schema;
