import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { KlassUpdateOneRequiredWithoutSessionsNestedInputObjectSchema } from './KlassUpdateOneRequiredWithoutSessionsNestedInput.schema';
import { PaymentUpdateOneWithoutSessionNestedInputObjectSchema } from './PaymentUpdateOneWithoutSessionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionUpdateInput> = z
  .object({
    date: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    duration: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    attended: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    klass: z
      .lazy(() => KlassUpdateOneRequiredWithoutSessionsNestedInputObjectSchema)
      .optional(),
    payment: z
      .lazy(() => PaymentUpdateOneWithoutSessionNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SessionUpdateInputObjectSchema = Schema;
