"use server";

import { ZendeskService } from "@/backend/service/zendesk";
import { Ticket } from "@/backend/tickets/ticket";
import { TicketType } from "@/backend/tickets/ticket.type";

const zendeskService = new ZendeskService();

export async function createTicket(formData: any): Promise<any> {
  try {
    const ticketData: TicketType = {
      account_name: formData.account_name,
      requester_email: formData.requester_email,
      subject: formData.subject,
      detailing: formData.detailing,
    };

    let ticket = new Ticket(ticketData);

    const result = await zendeskService.newTicket(ticket);

    console.log(result.status.toString());

    if (result.status.toString().startsWith("2")) {
      return { status: true, message: "Ticket created successfully" };
    } else {
      return { status: false, message: "Sorry, Ticket could not be created" };
    }
    return;
  } catch (error) {
    console.log("Error creating ticket:", error);
    throw new Error("Something unexpected happened while");
  }
}
