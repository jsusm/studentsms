import { z } from 'zod';
import { StudentCreateInputObjectSchema } from './objects/StudentCreateInput.schema';
import { StudentUncheckedCreateInputObjectSchema } from './objects/StudentUncheckedCreateInput.schema';

export const StudentCreateOneSchema = z.object({
  data: z.union([
    StudentCreateInputObjectSchema,
    StudentUncheckedCreateInputObjectSchema,
  ]),
});
