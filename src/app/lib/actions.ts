"use server";

import { ZendeskService } from "@/backend/service/zendesk";
import { TicketManager } from "@/backend/tickets/ticket-manager";
import { formDataToObject } from "../utils/parse-utils";
import { saveFileLocally } from "@/backend/utils/file-utils";

const zendeskService = new ZendeskService();
const ticketManager = new TicketManager();

export async function createTicket(formData: FormData): Promise<any> {
  try {
    const ticketData = formDataToObject(formData);
    let ticket = ticketManager.createTicket(ticketData);

    const fileField = formData.get("module_ticket.print_of_the_page") as File;

    if (fileField && fileField instanceof File) {
      const filePath = await saveFileLocally(fileField).then((it) => {
        return it;
      });

      ticketData.module_ticket.print_of_the_page = filePath;
    }

    const result = await zendeskService.newTicket(ticket);
    if (result.status.toString().startsWith("2")) {
      return { status: true, message: "Ticket created successfully" };
    } else {
      return { status: false, message: "Sorry, Ticket could not be created" };
    }
  } catch (error) {
    throw new Error("Something unexpected happened while creating the ticket");
  }
}
