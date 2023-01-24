import { z } from 'zod';
import { KlassUpdateInputObjectSchema } from './objects/KlassUpdateInput.schema';
import { KlassUncheckedUpdateInputObjectSchema } from './objects/KlassUncheckedUpdateInput.schema';
import { KlassWhereUniqueInputObjectSchema } from './objects/KlassWhereUniqueInput.schema';

export const KlassUpdateOneSchema = z.object({
  data: z.union([
    KlassUpdateInputObjectSchema,
    KlassUncheckedUpdateInputObjectSchema,
  ]),
  where: KlassWhereUniqueInputObjectSchema,
});
