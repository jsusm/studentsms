import { z } from 'zod';
import { StudentWhereUniqueInputObjectSchema } from './objects/StudentWhereUniqueInput.schema';
import { StudentCreateInputObjectSchema } from './objects/StudentCreateInput.schema';
import { StudentUncheckedCreateInputObjectSchema } from './objects/StudentUncheckedCreateInput.schema';
import { StudentUpdateInputObjectSchema } from './objects/StudentUpdateInput.schema';
import { StudentUncheckedUpdateInputObjectSchema } from './objects/StudentUncheckedUpdateInput.schema';

export const StudentUpsertSchema = z.object({
  where: StudentWhereUniqueInputObjectSchema,
  create: z.union([
    StudentCreateInputObjectSchema,
    StudentUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    StudentUpdateInputObjectSchema,
    StudentUncheckedUpdateInputObjectSchema,
  ]),
});
