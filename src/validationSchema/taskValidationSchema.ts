import { z } from 'zod';

export const taskValidationSchema = z.object({
    task: z.string().min(1, 'Task title must not be empty').max(100, "Title must be less than 100 characters")
})
