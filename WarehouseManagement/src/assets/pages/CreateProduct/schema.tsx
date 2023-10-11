import { z } from 'zod';
export const schema = z.object({
    product_name: z.string().min(3, { message: 'Product name must be at least 3 characters' }),
    description: z.string().min(20, { message: 'Description must be at least 20 characters' }),
    price: z.number(),
    image: z.string().min(20, { message: 'Description must be at least 20 characters' }),
    category: z.string(),
  });