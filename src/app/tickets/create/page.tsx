import Form from "@/app/ui/tickets/create-form";
import { DetailEnum } from "@/backend/tickets/ticket.type";

export default async function Page() {
  return (
    <main>
      <Form
        subjectOptions={[
          DetailEnum.catalog,
          DetailEnum.orders,
          DetailEnum.payments,
          DetailEnum.others,
        ]}
      />
    </main>
  );
}
