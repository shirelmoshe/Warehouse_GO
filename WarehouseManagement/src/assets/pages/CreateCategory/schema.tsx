import { z } from 'zod';
export const schema = z.object({
    categoryName: z.string().min(3, 'Category Name must be at least 3 characters').max(50),
    description: z.string().min(20, 'Description must be at least 20 characters').max(50, 'The description cannot be more than 50 characters'),
    image: z.string().optional(),
  });
   export type SchemaType = z.infer<typeof schema>;