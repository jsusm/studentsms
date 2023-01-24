import { z } from 'zod';
import { KlassWhereUniqueInputObjectSchema } from './objects/KlassWhereUniqueInput.schema';

export const KlassFindUniqueSchema = z.object({
  where: KlassWhereUniqueInputObjectSchema,
});
