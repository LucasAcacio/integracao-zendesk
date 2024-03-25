import { Ticket } from "./ticket";
import {
  DetailEnum,
  OrderType,
  PaymentType,
  CatalogType,
  TicketType,
  DefaultType,
} from "./ticket.type";

export class TicketManager {
  createTicket(formData: any): Ticket<any> {
    const accountName = formData.account_name as string | null;
    const requesterEmail = formData.requester_email as string | null;
    const subject = formData.subject as DetailEnum;

    const ticketData: TicketType<any> = {
      account_name: accountName,
      requester_email: requesterEmail,
      subject: subject,
      module_ticket: formData.module_ticket,
    };

    return new Ticket(ticketData);
  }
}
