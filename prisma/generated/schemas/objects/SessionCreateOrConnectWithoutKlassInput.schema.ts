import { z } from 'zod';
import { SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema';
import { SessionCreateWithoutKlassInputObjectSchema } from './SessionCreateWithoutKlassInput.schema';
import { SessionUncheckedCreateWithoutKlassInputObjectSchema } from './SessionUncheckedCreateWithoutKlassInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionCreateOrConnectWithoutKlassInput> = z
  .object({
    where: z.lazy(() => SessionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SessionCreateWithoutKlassInputObjectSchema),
      z.lazy(() => SessionUncheckedCreateWithoutKlassInputObjectSchema),
    ]),
  })
  .strict();

export const SessionCreateOrConnectWithoutKlassInputObjectSchema = Schema;
