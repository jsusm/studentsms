import { z } from 'zod';
import { SessionCreateWithoutPaymentInputObjectSchema } from './SessionCreateWithoutPaymentInput.schema';
import { SessionUncheckedCreateWithoutPaymentInputObjectSchema } from './SessionUncheckedCreateWithoutPaymentInput.schema';
import { SessionCreateOrConnectWithoutPaymentInputObjectSchema } from './SessionCreateOrConnectWithoutPaymentInput.schema';
import { SessionUpsertWithoutPaymentInputObjectSchema } from './SessionUpsertWithoutPaymentInput.schema';
import { SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema';
import { SessionUpdateWithoutPaymentInputObjectSchema } from './SessionUpdateWithoutPaymentInput.schema';
import { SessionUncheckedUpdateWithoutPaymentInputObjectSchema } from './SessionUncheckedUpdateWithoutPaymentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionUpdateOneRequiredWithoutPaymentNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SessionCreateWithoutPaymentInputObjectSchema),
          z.lazy(() => SessionUncheckedCreateWithoutPaymentInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => SessionCreateOrConnectWithoutPaymentInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => SessionUpsertWithoutPaymentInputObjectSchema)
        .optional(),
      connect: z.lazy(() => SessionWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => SessionUpdateWithoutPaymentInputObjectSchema),
          z.lazy(() => SessionUncheckedUpdateWithoutPaymentInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const SessionUpdateOneRequiredWithoutPaymentNestedInputObjectSchema =
  Schema;
