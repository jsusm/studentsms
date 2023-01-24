import { z } from 'zod';
import { StudentWhereInputObjectSchema } from './objects/StudentWhereInput.schema';

export const StudentDeleteManySchema = z.object({
  where: StudentWhereInputObjectSchema.optional(),
});
