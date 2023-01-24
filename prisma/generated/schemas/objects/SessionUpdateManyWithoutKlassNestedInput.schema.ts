import { z } from 'zod';
import { SessionCreateWithoutKlassInputObjectSchema } from './SessionCreateWithoutKlassInput.schema';
import { SessionUncheckedCreateWithoutKlassInputObjectSchema } from './SessionUncheckedCreateWithoutKlassInput.schema';
import { SessionCreateOrConnectWithoutKlassInputObjectSchema } from './SessionCreateOrConnectWithoutKlassInput.schema';
import { SessionUpsertWithWhereUniqueWithoutKlassInputObjectSchema } from './SessionUpsertWithWhereUniqueWithoutKlassInput.schema';
import { SessionCreateManyKlassInputEnvelopeObjectSchema } from './SessionCreateManyKlassInputEnvelope.schema';
import { SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema';
import { SessionUpdateWithWhereUniqueWithoutKlassInputObjectSchema } from './SessionUpdateWithWhereUniqueWithoutKlassInput.schema';
import { SessionUpdateManyWithWhereWithoutKlassInputObjectSchema } from './SessionUpdateManyWithWhereWithoutKlassInput.schema';
import { SessionScalarWhereInputObjectSchema } from './SessionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionUpdateManyWithoutKlassNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => SessionUpsertWithWhereUniqueWithoutKlassInputObjectSchema),
        z
          .lazy(() => SessionUpsertWithWhereUniqueWithoutKlassInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => SessionCreateManyKlassInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => SessionWhereUniqueInputObjectSchema),
        z.lazy(() => SessionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => SessionWhereUniqueInputObjectSchema),
        z.lazy(() => SessionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => SessionWhereUniqueInputObjectSchema),
        z.lazy(() => SessionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => SessionWhereUniqueInputObjectSchema),
        z.lazy(() => SessionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => SessionUpdateWithWhereUniqueWithoutKlassInputObjectSchema),
        z
          .lazy(() => SessionUpdateWithWhereUniqueWithoutKlassInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => SessionUpdateManyWithWhereWithoutKlassInputObjectSchema),
        z
          .lazy(() => SessionUpdateManyWithWhereWithoutKlassInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => SessionScalarWhereInputObjectSchema),
        z.lazy(() => SessionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const SessionUpdateManyWithoutKlassNestedInputObjectSchema = Schema;
