import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { SessionUpdateOneRequiredWithoutPaymentNestedInputObjectSchema } from './SessionUpdateOneRequiredWithoutPaymentNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PaymentUpdateInput> = z
  .object({
    at: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    session: z
      .lazy(() => SessionUpdateOneRequiredWithoutPaymentNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const PaymentUpdateInputObjectSchema = Schema;
