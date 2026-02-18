import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2, "Name is too short").max(20, "Name is too long"),
  email: z.email("Invalid email"),
  message: z
    .string()
    .min(2, "Message is too small")
    .max(254, "Message is too long"),
});

export type ContactInputType = z.infer<typeof ContactSchema>;
