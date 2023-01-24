import { z } from 'zod';
import { KlassOrderByWithRelationInputObjectSchema } from './objects/KlassOrderByWithRelationInput.schema';
import { KlassWhereInputObjectSchema } from './objects/KlassWhereInput.schema';
import { KlassWhereUniqueInputObjectSchema } from './objects/KlassWhereUniqueInput.schema';
import { KlassCountAggregateInputObjectSchema } from './objects/KlassCountAggregateInput.schema';
import { KlassMinAggregateInputObjectSchema } from './objects/KlassMinAggregateInput.schema';
import { KlassMaxAggregateInputObjectSchema } from './objects/KlassMaxAggregateInput.schema';
import { KlassAvgAggregateInputObjectSchema } from './objects/KlassAvgAggregateInput.schema';
import { KlassSumAggregateInputObjectSchema } from './objects/KlassSumAggregateInput.schema';

export const KlassAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), KlassCountAggregateInputObjectSchema])
    .optional(),
  _min: KlassMinAggregateInputObjectSchema.optional(),
  _max: KlassMaxAggregateInputObjectSchema.optional(),
  _avg: KlassAvgAggregateInputObjectSchema.optional(),
  _sum: KlassSumAggregateInputObjectSchema.optional(),
});
