import { z } from 'zod';
import { StudentWhereUniqueInputObjectSchema } from './objects/StudentWhereUniqueInput.schema';

export const StudentDeleteOneSchema = z.object({
  where: StudentWhereUniqueInputObjectSchema,
});
