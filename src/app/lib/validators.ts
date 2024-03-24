import { z } from "zod";

export const TicketValidator = z.object({
  account_name: z.string(),
  requester_email: z.string().refine(
    (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    {
      message: "Invalid requester email format",
    }
  ),
  subject: z.string(),
  detailing: z.string(),
});
