import { z } from 'zod';
import { KlassWhereInputObjectSchema } from './objects/KlassWhereInput.schema';

export const KlassDeleteManySchema = z.object({
  where: KlassWhereInputObjectSchema.optional(),
});
