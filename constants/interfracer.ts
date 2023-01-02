export interface Address {
  street: string,
  city: string,
  postCode: string,
  country: string
}

export interface Item {
  name: string,
  quantity: number,
  price: number,
  total: number
}


export interface InvoiceType {
  id?: string,
  createdAt: string,
  paymentDue: string,
  description: string,
  paymentTerms: string,
  clientName: string,
  clientEmail: string,
  status?: string,
  senderAddress: Address,
  clientAddress: Address,
  items?: Array<Item>,
  total?: number
}