import { z } from 'zod';
import { SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema';
import { SessionUpdateWithoutKlassInputObjectSchema } from './SessionUpdateWithoutKlassInput.schema';
import { SessionUncheckedUpdateWithoutKlassInputObjectSchema } from './SessionUncheckedUpdateWithoutKlassInput.schema';
import { SessionCreateWithoutKlassInputObjectSchema } from './SessionCreateWithoutKlassInput.schema';
import { SessionUncheckedCreateWithoutKlassInputObjectSchema } from './SessionUncheckedCreateWithoutKlassInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutKlassInput> =
  z
    .object({
      where: z.lazy(() => SessionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => SessionUpdateWithoutKlassInputObjectSchema),
        z.lazy(() => SessionUncheckedUpdateWithoutKlassInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => SessionCreateWithoutKlassInputObjectSchema),
        z.lazy(() => SessionUncheckedCreateWithoutKlassInputObjectSchema),
      ]),
    })
    .strict();

export const SessionUpsertWithWhereUniqueWithoutKlassInputObjectSchema = Schema;
