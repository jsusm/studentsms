import { z } from 'zod';
import { StudentOrderByWithRelationInputObjectSchema } from './objects/StudentOrderByWithRelationInput.schema';
import { StudentWhereInputObjectSchema } from './objects/StudentWhereInput.schema';
import { StudentWhereUniqueInputObjectSchema } from './objects/StudentWhereUniqueInput.schema';
import { StudentScalarFieldEnumSchema } from './enums/StudentScalarFieldEnum.schema';

export const StudentFindFirstSchema = z.object({
  orderBy: z
    .union([
      StudentOrderByWithRelationInputObjectSchema,
      StudentOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: StudentWhereInputObjectSchema.optional(),
  cursor: StudentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(StudentScalarFieldEnumSchema).optional(),
});
