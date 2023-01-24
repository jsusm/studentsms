import { z } from 'zod';
import { KlassOrderByWithRelationInputObjectSchema } from './objects/KlassOrderByWithRelationInput.schema';
import { KlassWhereInputObjectSchema } from './objects/KlassWhereInput.schema';
import { KlassWhereUniqueInputObjectSchema } from './objects/KlassWhereUniqueInput.schema';
import { KlassScalarFieldEnumSchema } from './enums/KlassScalarFieldEnum.schema';

export const KlassFindFirstSchema = z.object({
  orderBy: z
    .union([
      KlassOrderByWithRelationInputObjectSchema,
      KlassOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: KlassWhereInputObjectSchema.optional(),
  cursor: KlassWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(KlassScalarFieldEnumSchema).optional(),
});
