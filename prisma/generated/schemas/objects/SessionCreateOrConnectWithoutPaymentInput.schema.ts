import { z } from 'zod';
import { SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema';
import { SessionCreateWithoutPaymentInputObjectSchema } from './SessionCreateWithoutPaymentInput.schema';
import { SessionUncheckedCreateWithoutPaymentInputObjectSchema } from './SessionUncheckedCreateWithoutPaymentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionCreateOrConnectWithoutPaymentInput> = z
  .object({
    where: z.lazy(() => SessionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SessionCreateWithoutPaymentInputObjectSchema),
      z.lazy(() => SessionUncheckedCreateWithoutPaymentInputObjectSchema),
    ]),
  })
  .strict();

export const SessionCreateOrConnectWithoutPaymentInputObjectSchema = Schema;
