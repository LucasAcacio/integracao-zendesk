import {
  ArchiveBoxIcon,
  DocumentMagnifyingGlassIcon,
  PrinterIcon,
} from "@heroicons/react/24/outline";

export default function CatalogTicketForm() {
  return (
    <>
      <div className="mb-4">
        <label htmlFor="detailing" className="mb-2 block text-sm font-medium">
          Detail
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="module_ticket.detailing"
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
          SKU Id
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="module_ticket.sku_id"
              name="module_ticket.sku_id"
              type="text"
              placeholder="Please, provide the SKU Id"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              required
            />
            <ArchiveBoxIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="detailing" className="mb-2 block text-sm font-medium">
          Print of the page
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="module_ticket.print_of_the_page"
              name="module_ticket.print_of_the_page"
              type="file"
              placeholder="Please, provide the print of the catalog page"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              required
            />
            <PrinterIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
      </div>
    </>
  );
}
