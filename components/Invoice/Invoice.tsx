import React, { useState } from "react";
import {invoice_dummy_data} from '../../constants/data'
import DownArrow from '../../assets/icon-arrow-down.svg'
import DownRight from '../../assets/icon-arrow-right.svg'
import IconPlus from '../../assets/icon-plus.svg'
import IndividualInovide from "./IndividualInovide";

interface Address {
  street: string,
  city: string,
  postcode: string,
  country: string
}

interface Item {
  name: string,
  quantity: number,
  price: number,
  total: number
}


interface Invoice {
  id: string,
  createdAt: string,
  paymentDue: string,
  description: string,
  paymentTerms: number,
  clientName: string,
  clientEmail: string,
  status: string,
  senderAddress: Address,
  clientAddress: Address,
  item: Array<Item>,
  total: number
}

const Invoice = () => {
  const [invoiceDescripiton, setInvoiceDescription] = useState<Invoice>();
  const handleDisplayInvoiceDescription = (invoice: any) => {
    setInvoiceDescription(invoice)
  }
  return (
    <div className="max-w-2xl">
    {!invoiceDescripiton ? (
    <div>
      <div className="flex">
        <div className="flex-1">
          <h3>Invoices</h3>
          <div>There are 7 total invoices.</div>
        </div>
        <div className="flex flex-1 items-center">
          Filter by status
          <DownArrow />
        </div>
        <div className="flex-1 text-white">
          <button className="flex items-center bg-blue-500 pl-1 pr-4 py-2 rounded-3xl">
            <div className="bg-white items-center p-2 rounded-xl mr-4">
              <IconPlus />
            </div>
            New Invoice
          </button>
        </div>
      </div>
      <div>
        {invoice_dummy_data.length ? invoice_dummy_data.map((invoice) => {
          const { id, createdAt, clientName, total, status } = invoice
          return (
            <div className="flex items-center bg-[#252945] px-4 py-4 mb-4 rounded-sm rounded overflow-hidden shadow-lg">
              <strong className="pr-10">#{id}</strong>
              <span className="pr-10">{createdAt}</span>
              <span className="pr-10">{clientName}</span>
              <span className="pr-10">${total}</span>
              <span className="pr-10">{status}</span>
              <span onClick={() => handleDisplayInvoiceDescription(invoice)}>
                <DownRight />
              </span>
            </div>
          )
        }) : (
          <div className="flex-col">
            <h4>There is nothing here</h4>
            <span>{'Create an invoice by clicking the \n'}<strong>New Invoice</strong> button and get started</span>
          </div>
        )}
      </div>
    </div>
    ) : (
      <IndividualInovide invoiceData={invoiceDescripiton} />
    )}
    </div>
  );
};

export default Invoice;
