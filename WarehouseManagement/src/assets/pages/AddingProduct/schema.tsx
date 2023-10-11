import { z } from 'zod';
export const schema = z.object({
  expiration: z.date(),
  quantity: z.number(),

  
  });
  export type SchemaType = z.infer<typeof schema>;