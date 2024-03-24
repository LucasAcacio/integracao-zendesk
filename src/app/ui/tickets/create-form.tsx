"use client";

import Link from "next/link";
import {
  AtSymbolIcon,
  UserCircleIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { SubmitButton } from "@/app/ui/button";
import { createTicket } from "@/app/lib/actions";
import { FormEvent, useState } from "react";
import { TicketValidator } from "@/app/lib/validators";
import { TicketFormState } from "@/app/lib/definitions";

export default function Form() {
  const initialState = { message: null, errors: {} };

  const [state, setState] = useState<TicketFormState>(initialState);
  const [result, setResult] = useState<{
    status: boolean;
    message: string | null;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const validatedFields = TicketValidator.safeParse({
      account_name: formData.get("account_name"),
      requester_email: formData.get("requester_email"),
      subject: formData.get("subject"),
      detailing: formData.get("detailing"),
    });

    if (!validatedFields.success) {
      setState({
        errors: validatedFields.error.flatten().fieldErrors,
        message: "Failed to Create Ticket.",
      });
      return;
    }

    const result = await createTicket(validatedFields.data);
    console.log(result);

    setResult(result);
  }

  return (
    <div>
      {/* TODO: ALERT */}
      {result?.status === false && (
        <div style={{ color: "red" }}>{result.message}</div>
      )}
      {result?.status === true && (
        <div style={{ color: "green" }}>{result.message}</div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
          {/* Account Name */}
          <div className="mb-4">
            <label
              htmlFor="account_name"
              className="mb-2 block text-sm font-medium"
            >
              Account Name
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="account_name"
                  name="account_name"
                  type="text"
                  placeholder="Enter your account name"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  required
                />
                <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
          {/* Requester Email */}
          <div className="mb-4">
            <label
              htmlFor="requester_email"
              className="mb-2 block text-sm font-medium"
            >
              Requester E-mail
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="requester_email"
                  name="requester_email"
                  type="text"
                  placeholder="Enter your requester e-mail"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  required
                />
                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
              <div id="customer-error" aria-live="polite" aria-atomic="true">
                {state.errors?.requester_email &&
                  state.errors.requester_email.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>
          </div>
          {/* Subject */}
          <div className="mb-4">
            <label htmlFor="subject" className="mb-2 block text-sm font-medium">
              Subject
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Enter the ticket subject"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  required
                />
                <WrenchScrewdriverIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
          {/* Detailing */}
          <div className="mb-4">
            <label
              htmlFor="detailing"
              className="mb-2 block text-sm font-medium"
            >
              Detail
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="detailing"
                  name="detailing"
                  type="text"
                  placeholder="Please, detail what happened"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  required
                />
                <WrenchScrewdriverIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/ticket/create"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <SubmitButton type="submit">Create Ticket</SubmitButton>
        </div>
      </form>
    </div>
  );
}
