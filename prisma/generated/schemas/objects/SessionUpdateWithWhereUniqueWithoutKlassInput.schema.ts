import { z } from 'zod';
import { SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema';
import { SessionUpdateWithoutKlassInputObjectSchema } from './SessionUpdateWithoutKlassInput.schema';
import { SessionUncheckedUpdateWithoutKlassInputObjectSchema } from './SessionUncheckedUpdateWithoutKlassInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutKlassInput> =
  z
    .object({
      where: z.lazy(() => SessionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => SessionUpdateWithoutKlassInputObjectSchema),
        z.lazy(() => SessionUncheckedUpdateWithoutKlassInputObjectSchema),
      ]),
    })
    .strict();

export const SessionUpdateWithWhereUniqueWithoutKlassInputObjectSchema = Schema;
