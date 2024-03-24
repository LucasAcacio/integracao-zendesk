import { TicketType } from "./ticket.type";

export class Ticket {
  account_name: string | null;
  requester_email: string | null;
  subject: string | null;
  detailing: string | null;

  constructor(ticketData: TicketType) {
    this.validateTicketData(ticketData);

    this.account_name = ticketData.account_name;
    this.requester_email = ticketData.requester_email;
    this.subject = ticketData.subject;
    this.detailing = ticketData.detailing;
  }

  private validateTicketData(ticketData: TicketType): void {
    const { account_name, requester_email, subject, detailing } = ticketData;

    if (!account_name || !requester_email || !subject || !detailing) {
      throw new Error("All fields must be provided.");
    }
  }

  getData(): TicketType {
    return {
      account_name: this.account_name,
      requester_email: this.requester_email,
      subject: this.subject,
      detailing: this.detailing,
    };
  }
}
