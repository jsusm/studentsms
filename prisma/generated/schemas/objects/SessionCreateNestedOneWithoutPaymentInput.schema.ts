import { z } from 'zod';
import { SessionCreateWithoutPaymentInputObjectSchema } from './SessionCreateWithoutPaymentInput.schema';
import { SessionUncheckedCreateWithoutPaymentInputObjectSchema } from './SessionUncheckedCreateWithoutPaymentInput.schema';
import { SessionCreateOrConnectWithoutPaymentInputObjectSchema } from './SessionCreateOrConnectWithoutPaymentInput.schema';
import { SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionCreateNestedOneWithoutPaymentInput> = z
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
    connect: z.lazy(() => SessionWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const SessionCreateNestedOneWithoutPaymentInputObjectSchema = Schema;
