import { z } from 'zod';
import { KlassUpdateWithoutSessionsInputObjectSchema } from './KlassUpdateWithoutSessionsInput.schema';
import { KlassUncheckedUpdateWithoutSessionsInputObjectSchema } from './KlassUncheckedUpdateWithoutSessionsInput.schema';
import { KlassCreateWithoutSessionsInputObjectSchema } from './KlassCreateWithoutSessionsInput.schema';
import { KlassUncheckedCreateWithoutSessionsInputObjectSchema } from './KlassUncheckedCreateWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.KlassUpsertWithoutSessionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => KlassUpdateWithoutSessionsInputObjectSchema),
      z.lazy(() => KlassUncheckedUpdateWithoutSessionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => KlassCreateWithoutSessionsInputObjectSchema),
      z.lazy(() => KlassUncheckedCreateWithoutSessionsInputObjectSchema),
    ]),
  })
  .strict();

export const KlassUpsertWithoutSessionsInputObjectSchema = Schema;
