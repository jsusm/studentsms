import { z } from 'zod';
import { SessionCreateWithoutKlassInputObjectSchema } from './SessionCreateWithoutKlassInput.schema';
import { SessionUncheckedCreateWithoutKlassInputObjectSchema } from './SessionUncheckedCreateWithoutKlassInput.schema';
import { SessionCreateOrConnectWithoutKlassInputObjectSchema } from './SessionCreateOrConnectWithoutKlassInput.schema';
import { SessionCreateManyKlassInputEnvelopeObjectSchema } from './SessionCreateManyKlassInputEnvelope.schema';
import { SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionCreateNestedManyWithoutKlassInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SessionCreateWithoutKlassInputObjectSchema),
        z.lazy(() => SessionCreateWithoutKlassInputObjectSchema).array(),
        z.lazy(() => SessionUncheckedCreateWithoutKlassInputObjectSchema),
        z
          .lazy(() => SessionUncheckedCreateWithoutKlassInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => SessionCreateOrConnectWithoutKlassInputObjectSchema),
        z
          .lazy(() => SessionCreateOrConnectWithoutKlassInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => SessionCreateManyKlassInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => SessionWhereUniqueInputObjectSchema),
        z.lazy(() => SessionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const SessionCreateNestedManyWithoutKlassInputObjectSchema = Schema;
