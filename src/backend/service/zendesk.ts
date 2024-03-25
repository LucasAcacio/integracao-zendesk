import axios from "axios";
import { Ticket } from "../tickets/ticket";
import fs from "fs";
import path from "path";
import { DetailEnum } from "../tickets/ticket.type";
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

  async uploadFile(filePath: string) {
    const fileName = path.basename(filePath);
    const fileData = fs.readFileSync(filePath);

    try {
      const response = await axios.post(
        `${this.host}/api/v2/uploads.json?filename=${fileName}`,
        fileData,
        {
          headers: {
            "Content-Type": "image/png",
          },
          auth: {
            username: this.email ?? "",
            password: this.token ?? "",
          },
        }
      );

      return response;
    } catch (error: any) {
      throw new Error("Error while uploading file: ");
    }
  }

  async newTicket(ticket: Ticket<any>) {
    try {
      let uploads: string[] = [];

      if (
        ticket.subject === DetailEnum.catalog &&
        ticket.module_ticket.print_of_the_page
      ) {
        const fileRes = await this.uploadFile(
          ticket.module_ticket.print_of_the_page
        );

        delete ticket.module_ticket["print_of_the_page"];
        if (fileRes.status.toString().startsWith("2")) {
          uploads.push(fileRes.data.upload.token);
        }
      }

      const body = JSON.stringify(ticket.module_ticket);
      const ticketData = JSON.parse(body);

      // Start building the string for key-value pairs
      let keyValueString = "";

      // Iterate through the object properties
      for (const key in ticketData) {
        keyValueString += `${key}: ${ticketData[key]}\n`;
      }

      const msg = {
        ticket: {
          subject: ticket.subject,
          comment: {
            body: keyValueString,
            uploads: uploads,
          },
          requester: {
            name: ticket.account_name,
            email: ticket.requester_email,
          },
        },
      };

      return await axios.post(`${this.host}/api/v2/tickets.json`, msg, {
        headers: {
          "Content-Type": "application/json",
        },
        auth: {
          username: this.email ?? "",
          password: this.token ?? "",
        },
      });
      // return;
    } catch (error: any) {
      throw error;
    }
  }
}
