import { z } from "zod";
import priorities from "./priorities";

export const schema = z.object({
  description: z.string().min(3).max(10_000),
  date: z.coerce.date().refine((date) => {
    const parsedDate= new Date(date);
    return !isNaN(parsedDate.getTime());
  },{ message: "Invalid date format. Please provide a valid date" }),
  priority: z.enum(priorities, {
    errorMap: () => ({ message: "Priority is required" }),
  }),
});

export type FormData = z.infer<typeof schema>;
