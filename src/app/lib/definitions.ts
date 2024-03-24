export type TicketFormState = {
  errors?: {
    account_name?: string[];
    requester_email?: string[];
    subject?: string[];
    detailing?: string[];
    request?: boolean | false;
  };
  message?: string | null;
};
