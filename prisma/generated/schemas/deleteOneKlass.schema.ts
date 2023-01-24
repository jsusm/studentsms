import { z } from 'zod';
import { KlassWhereUniqueInputObjectSchema } from './objects/KlassWhereUniqueInput.schema';

export const KlassDeleteOneSchema = z.object({
  where: KlassWhereUniqueInputObjectSchema,
});
