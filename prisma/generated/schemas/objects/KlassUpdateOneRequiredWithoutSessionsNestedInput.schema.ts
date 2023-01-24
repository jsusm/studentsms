import { z } from 'zod';
import { KlassCreateWithoutSessionsInputObjectSchema } from './KlassCreateWithoutSessionsInput.schema';
import { KlassUncheckedCreateWithoutSessionsInputObjectSchema } from './KlassUncheckedCreateWithoutSessionsInput.schema';
import { KlassCreateOrConnectWithoutSessionsInputObjectSchema } from './KlassCreateOrConnectWithoutSessionsInput.schema';
import { KlassUpsertWithoutSessionsInputObjectSchema } from './KlassUpsertWithoutSessionsInput.schema';
import { KlassWhereUniqueInputObjectSchema } from './KlassWhereUniqueInput.schema';
import { KlassUpdateWithoutSessionsInputObjectSchema } from './KlassUpdateWithoutSessionsInput.schema';
import { KlassUncheckedUpdateWithoutSessionsInputObjectSchema } from './KlassUncheckedUpdateWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.KlassUpdateOneRequiredWithoutSessionsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => KlassCreateWithoutSessionsInputObjectSchema),
          z.lazy(() => KlassUncheckedCreateWithoutSessionsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => KlassCreateOrConnectWithoutSessionsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => KlassUpsertWithoutSessionsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => KlassWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => KlassUpdateWithoutSessionsInputObjectSchema),
          z.lazy(() => KlassUncheckedUpdateWithoutSessionsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const KlassUpdateOneRequiredWithoutSessionsNestedInputObjectSchema =
  Schema;
