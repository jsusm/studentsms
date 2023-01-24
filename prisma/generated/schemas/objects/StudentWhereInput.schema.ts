import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudentWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => StudentWhereInputObjectSchema),
        z.lazy(() => StudentWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => StudentWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => StudentWhereInputObjectSchema),
        z.lazy(() => StudentWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    lastName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    contactNumber: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    bornDate: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const StudentWhereInputObjectSchema = Schema;
