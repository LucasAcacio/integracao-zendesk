export interface TicketType<T extends DefaultType> {
  account_name: string | null;
  requester_email: string | null;
  subject: DetailEnum;
  module_ticket: T;
}

export interface DefaultType {
  detailing: string | null;

  getData(): Record<string, any>;
}

export interface OrderType extends DefaultType {
  order_number: string | null;
  affecting_all_users: boolean | null;
}

export interface PaymentType extends DefaultType {
  transaction_number: string | null;
  transaction_status: TransactionStatusEnum;
  payment_acquirer: string | null;
}

export interface CatalogType extends DefaultType {
  sku_id: string | null;
  // TODO: Imagem
  print_of_the_page: File | null;
}

export enum TransactionStatusEnum {
  pending = "Pending",
  processing = "Processing",
  success = "Success",
  error = "Error",
}

export enum DetailEnum {
  orders = "Orders",
  payments = "Payments",
  catalog = "Catalog",
  others = "Others",
}
