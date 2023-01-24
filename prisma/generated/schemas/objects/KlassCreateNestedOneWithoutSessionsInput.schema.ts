import { z } from 'zod';
import { KlassCreateWithoutSessionsInputObjectSchema } from './KlassCreateWithoutSessionsInput.schema';
import { KlassUncheckedCreateWithoutSessionsInputObjectSchema } from './KlassUncheckedCreateWithoutSessionsInput.schema';
import { KlassCreateOrConnectWithoutSessionsInputObjectSchema } from './KlassCreateOrConnectWithoutSessionsInput.schema';
import { KlassWhereUniqueInputObjectSchema } from './KlassWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.KlassCreateNestedOneWithoutSessionsInput> = z
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
    connect: z.lazy(() => KlassWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const KlassCreateNestedOneWithoutSessionsInputObjectSchema = Schema;
