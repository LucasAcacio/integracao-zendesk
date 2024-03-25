import {
  DetailEnum,
  TransactionStatusEnum,
} from "@/backend/tickets/ticket.type";
import DefaultTicketForm from "./ticket-form-default";
import OrderTicketForm from "./ticket-form-order";
import PaymentTicketForm from "./ticket-form-payment";
import CatalogTicketForm from "./ticket-form-catalog";

export default function ModuleForm({ subject }: { subject: DetailEnum }) {
  if (subject && subject === DetailEnum.others) {
    return <DefaultTicketForm />;
  } else if (subject && subject === DetailEnum.orders) {
    return <OrderTicketForm />;
  } else if (subject && subject === DetailEnum.catalog) {
    return <CatalogTicketForm />;
  } else if (subject && subject === DetailEnum.payments) {
    return (
      <PaymentTicketForm
        transactionStatusOptions={[
          TransactionStatusEnum.error,
          TransactionStatusEnum.pending,
          TransactionStatusEnum.processing,
          TransactionStatusEnum.success,
        ]}
      />
    );
  }
}
