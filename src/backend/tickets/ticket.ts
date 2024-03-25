import { DefaultType, DetailEnum, TicketType } from "./ticket.type";

export class Ticket<T extends DefaultType> implements TicketType<T> {
  account_name: string | null;
  requester_email: string | null;
  subject: DetailEnum;
  module_ticket: T;

  constructor(ticketData: TicketType<T>) {
    this.validateData(ticketData);
    this.account_name = ticketData.account_name;
    this.requester_email = ticketData.requester_email;
    this.subject = ticketData.subject;
    this.module_ticket = ticketData.module_ticket;
  }

  validateData(ticketData: TicketType<T>): void {
    const { account_name, requester_email, subject, module_ticket } =
      ticketData;

    if (!account_name || !requester_email || !subject || !module_ticket) {
      throw new Error("All fields must be provided.");
    }
  }
}
