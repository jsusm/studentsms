import { z } from 'zod';
import { StudentWhereUniqueInputObjectSchema } from './objects/StudentWhereUniqueInput.schema';

export const StudentFindUniqueSchema = z.object({
  where: StudentWhereUniqueInputObjectSchema,
});
