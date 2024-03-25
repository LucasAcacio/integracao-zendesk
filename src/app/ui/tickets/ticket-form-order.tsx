import {
  ClipboardDocumentCheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function OrderTicketForm() {
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
          Order Number
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="order_number"
              name="module_ticket.order_number"
              type="text"
              placeholder="Please, inform the order number"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              required
            />
            <ClipboardDocumentCheckIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
      </div>

      <div className="mb-4 flex items-center">
        <label
          htmlFor="affecting_all_users"
          className="mr-2 block text-sm font-medium"
        >
          Affecting All Users?
        </label>
        <input
          id="affecting_all_users"
          name="module_ticket.affecting_all_users"
          type="checkbox"
          value="true"
          className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
        />
      </div>
    </>
  );
}
