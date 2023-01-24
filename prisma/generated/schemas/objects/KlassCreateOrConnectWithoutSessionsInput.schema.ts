import { z } from 'zod';
import { KlassWhereUniqueInputObjectSchema } from './KlassWhereUniqueInput.schema';
import { KlassCreateWithoutSessionsInputObjectSchema } from './KlassCreateWithoutSessionsInput.schema';
import { KlassUncheckedCreateWithoutSessionsInputObjectSchema } from './KlassUncheckedCreateWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.KlassCreateOrConnectWithoutSessionsInput> = z
  .object({
    where: z.lazy(() => KlassWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => KlassCreateWithoutSessionsInputObjectSchema),
      z.lazy(() => KlassUncheckedCreateWithoutSessionsInputObjectSchema),
    ]),
  })
  .strict();

export const KlassCreateOrConnectWithoutSessionsInputObjectSchema = Schema;
