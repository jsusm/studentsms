import { z } from 'zod';
import { StudentUpdateInputObjectSchema } from './objects/StudentUpdateInput.schema';
import { StudentUncheckedUpdateInputObjectSchema } from './objects/StudentUncheckedUpdateInput.schema';
import { StudentWhereUniqueInputObjectSchema } from './objects/StudentWhereUniqueInput.schema';

export const StudentUpdateOneSchema = z.object({
  data: z.union([
    StudentUpdateInputObjectSchema,
    StudentUncheckedUpdateInputObjectSchema,
  ]),
  where: StudentWhereUniqueInputObjectSchema,
});
