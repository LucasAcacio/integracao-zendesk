import { z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const ModuleTicketSchema = z.object({
  order_number: z.string().optional(),
  affecting_all_users: z.boolean().optional(),
  detailing: z.string(),
  transaction_number: z.string().optional(),
  payment_acquirer: z.string().optional(),
  transaction_status: z.string().optional(),
  sku_id: z.string().optional(),
  print_of_the_page: z
    .any()
    .refine(
      (file: File) => file?.size <= MAX_FILE_SIZE,
      `Max image size is 5MB.`
    )
    .refine(
      (file: File) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    )
    .optional(),
});

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
  module_ticket: ModuleTicketSchema,
});
