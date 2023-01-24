import { z } from 'zod';

export const SessionScalarFieldEnumSchema = z.enum([
  'id',
  'date',
  'duration',
  'attended',
  'klassId',
]);
