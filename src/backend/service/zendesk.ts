import axios from "axios";
import { Ticket } from "../tickets/ticket";
require("dotenv").config();

export class ZendeskService {
  email: string | undefined;
  token: string | undefined;
  host: string | undefined;

  constructor() {
    this.email = process.env.ZENDESK_USER;
    this.token = process.env.ZENDESK_PWD;
    this.host = process.env.ZENDESK_HOST;

    if (!this.email || !this.token) {
      throw new Error("Email, token or url is missing in the .env file.");
    }
  }

  async newTicket(ticket: Ticket) {
    try {
      var tInfo = ticket.getData() ?? {};

      return await axios.post(
        `${this.host}/api/v2/tickets.json`,
        {
          ticket: {
            subject: tInfo.subject,
            description: tInfo.detailing,
            requester: {
              name: tInfo.account_name,
              email: tInfo.requester_email,
            },
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          auth: {
            username: this.email ?? "",
            password: this.token ?? "",
          },
        }
      );
    } catch (error: any) {
      throw error;
    }
  }
}
