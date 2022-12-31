import React, { useState } from "react";
import {invoice_dummy_data} from '../../constants/data'
import DownArrow from '../../assets/icon-arrow-down.svg'
import DownRight from '../../assets/icon-arrow-right.svg'
import LeftArrow from '../../assets/icon-arrow-left.svg'
import IconPlus from '../../assets/icon-plus.svg'
import IndividualInovide from "./IndividualInovide";
import { InvoiceType } from "../../constants/interfracer";
import Link from "next/link";

const Invoice = () => {
  const [invoiceDescripiton, setInvoiceDescription] = useState<InvoiceType>();
  const handleDisplayInvoiceDescription = (invoice: any) => {
    setInvoiceDescription(invoice)
  }
  return (
    <>
    {/* {invoiceDescripiton && (
      <div className="flex items-center">
        <span className="cursor-pointer" onClick={() => setInvoiceDescription(undefined)}>
          <LeftArrow /> 
        </span>
        <strong className="pl-2">Go Back</strong>
      </div>
    )} */}
    {!invoiceDescripiton ? (
    <div>
      <div className="flex">
        <div className="flex-1">
          <h3>Invoices</h3>
          <p>There are 7 total invoices.</p>
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
            <Link href={`/invoices/id`} passHref>
              <div className="flex items-center bg-[#252945] px-4 py-4 mb-4 rounded-sm rounded overflow-hidden shadow-lg">
                <div>
                  <h5>#{id}</h5>
                </div>
                <div>
                  <h6>{createdAt}</h6>
                </div>
                <div>
                  <p>{clientName}</p>
                </div>
                <div>
                  <h3>${total}</h3>
                </div>
                <div>
                  <span>{status}</span>
                </div>
                <span>{createdAt}</span>
                <span className="cursor-pointer" onClick={() => handleDisplayInvoiceDescription(invoice)}>
                  <DownRight />
                </span>
              </div>
            </Link>
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
    </>
  );
};

export default Invoice;
