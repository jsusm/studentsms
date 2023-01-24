import { z } from 'zod';
import { KlassWhereUniqueInputObjectSchema } from './objects/KlassWhereUniqueInput.schema';
import { KlassCreateInputObjectSchema } from './objects/KlassCreateInput.schema';
import { KlassUncheckedCreateInputObjectSchema } from './objects/KlassUncheckedCreateInput.schema';
import { KlassUpdateInputObjectSchema } from './objects/KlassUpdateInput.schema';
import { KlassUncheckedUpdateInputObjectSchema } from './objects/KlassUncheckedUpdateInput.schema';

export const KlassUpsertSchema = z.object({
  where: KlassWhereUniqueInputObjectSchema,
  create: z.union([
    KlassCreateInputObjectSchema,
    KlassUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    KlassUpdateInputObjectSchema,
    KlassUncheckedUpdateInputObjectSchema,
  ]),
});
