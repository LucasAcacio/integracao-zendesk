import { DetailEnum } from "@/backend/tickets/ticket.type";

export function formDataToObject(formData: FormData) {
  let childObject = {};

  const subject = formData.get("subject");

  switch (subject) {
    case DetailEnum.orders:
      childObject = {
        order_number: formData.get("module_ticket.order_number"),
        affecting_all_users: Boolean(
          formData.get("module_ticket.affecting_all_users") ?? false
        ),
        detailing: formData.get("module_ticket.detailing"),
      };
      break;
    case DetailEnum.payments:
      childObject = {
        transaction_number: formData.get("module_ticket.transaction_number"),
        transaction_status: formData.get("module_ticket.transaction_status"),
        payment_acquirer: formData.get("module_ticket.payment_acquirer"),
        detailing: formData.get("module_ticket.detailing"),
      };
      break;
    case DetailEnum.catalog:
      childObject = {
        sku_id: formData.get("module_ticket.sku_id"),
        print_of_the_page: formData.get(
          "module_ticket.print_of_the_page"
        ) as File,
        detailing: formData.get("module_ticket.detailing"),
      };
      break;
    case DetailEnum.others:
      childObject = {
        detailing: formData.get("module_ticket.detailing"),
      };
      break;
  }

  let obj = {
    account_name: formData.get("account_name"),
    requester_email: formData.get("requester_email"),
    subject: subject,
    module_ticket: childObject,
  };

  return obj;
}
