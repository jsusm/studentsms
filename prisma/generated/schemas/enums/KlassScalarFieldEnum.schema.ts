import { z } from 'zod';

export const KlassScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'name',
  'pph',
]);
