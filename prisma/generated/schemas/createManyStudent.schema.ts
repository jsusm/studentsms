import { z } from 'zod';
import { StudentCreateManyInputObjectSchema } from './objects/StudentCreateManyInput.schema';

export const StudentCreateManySchema = z.object({
  data: z.union([
    StudentCreateManyInputObjectSchema,
    z.array(StudentCreateManyInputObjectSchema),
  ]),
});
