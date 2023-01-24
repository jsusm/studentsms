import { z } from 'zod';
import { StudentUpdateManyMutationInputObjectSchema } from './objects/StudentUpdateManyMutationInput.schema';
import { StudentWhereInputObjectSchema } from './objects/StudentWhereInput.schema';

export const StudentUpdateManySchema = z.object({
  data: StudentUpdateManyMutationInputObjectSchema,
  where: StudentWhereInputObjectSchema.optional(),
});
