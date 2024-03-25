import { TransactionStatusEnum } from "@/backend/tickets/ticket.type";
import {
  ArrowsUpDownIcon,
  DocumentMagnifyingGlassIcon,
  TruckIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function PaymentTicketForm({
  transactionStatusOptions,
}: {
  transactionStatusOptions: TransactionStatusEnum[];
}) {
  const [transactionStatus, setTransactionStatus] =
    useState<TransactionStatusEnum>(TransactionStatusEnum.pending);

  const handleTransactionStatusChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    event.preventDefault();
    const selectedSubject = event.target.value as TransactionStatusEnum;
    setTransactionStatus(selectedSubject);
  };

  return (
    <>
      <div className="mb-4">
        <label htmlFor="detailing" className="mb-2 block text-sm font-medium">
          Detail
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="detailing"
              name="module_ticket.detailing"
              type="text"
              placeholder="Please, detail what happened"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              required
            />
            <DocumentMagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="detailing" className="mb-2 block text-sm font-medium">
          Transaction Number
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="transaction_number"
              name="module_ticket.transaction_number"
              type="text"
              placeholder="Please, inform the transaction number"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              required
            />
            <ArrowsUpDownIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="transactionstatus"
          className="mb-2 block text-sm font-medium"
        >
          Transaction Status
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <select
              id="module_ticket.transaction_status"
              name="module_ticket.transaction_status"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={transactionStatus}
              onChange={handleTransactionStatusChange}
            >
              <option value="" disabled>
                Select a transactionstatus
              </option>
              {transactionStatusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <TruckIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="detailing" className="mb-2 block text-sm font-medium">
          Payment Acquirer
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="payment_acquirer"
              name="module_ticket.payment_acquirer"
              type="text"
              placeholder="Please, inform the payment acquirer"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              required
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
      </div>
    </>
  );
}
