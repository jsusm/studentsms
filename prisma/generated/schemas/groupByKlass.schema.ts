import { z } from 'zod';
import { KlassWhereInputObjectSchema } from './objects/KlassWhereInput.schema';
import { KlassOrderByWithAggregationInputObjectSchema } from './objects/KlassOrderByWithAggregationInput.schema';
import { KlassScalarWhereWithAggregatesInputObjectSchema } from './objects/KlassScalarWhereWithAggregatesInput.schema';
import { KlassScalarFieldEnumSchema } from './enums/KlassScalarFieldEnum.schema';

export const KlassGroupBySchema = z.object({
  where: KlassWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      KlassOrderByWithAggregationInputObjectSchema,
      KlassOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: KlassScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(KlassScalarFieldEnumSchema),
});
