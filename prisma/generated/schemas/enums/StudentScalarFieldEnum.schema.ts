import { z } from 'zod';

export const StudentScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'lastName',
  'contactNumber',
  'bornDate',
  'description',
]);
