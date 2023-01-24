import { z } from 'zod';
import { KlassCreateManyInputObjectSchema } from './objects/KlassCreateManyInput.schema';

export const KlassCreateManySchema = z.object({
  data: z.union([
    KlassCreateManyInputObjectSchema,
    z.array(KlassCreateManyInputObjectSchema),
  ]),
});
