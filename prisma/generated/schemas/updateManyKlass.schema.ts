import { z } from 'zod';
import { KlassUpdateManyMutationInputObjectSchema } from './objects/KlassUpdateManyMutationInput.schema';
import { KlassWhereInputObjectSchema } from './objects/KlassWhereInput.schema';

export const KlassUpdateManySchema = z.object({
  data: KlassUpdateManyMutationInputObjectSchema,
  where: KlassWhereInputObjectSchema.optional(),
});
