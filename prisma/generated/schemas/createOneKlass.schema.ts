import { z } from 'zod';
import { KlassCreateInputObjectSchema } from './objects/KlassCreateInput.schema';
import { KlassUncheckedCreateInputObjectSchema } from './objects/KlassUncheckedCreateInput.schema';

export const KlassCreateOneSchema = z.object({
  data: z.union([
    KlassCreateInputObjectSchema,
    KlassUncheckedCreateInputObjectSchema,
  ]),
});
