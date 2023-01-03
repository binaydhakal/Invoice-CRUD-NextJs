import React, { useEffect, useState } from "react";
import {invoice_dummy_data} from '../../constants/data'
import DownArrow from '../../assets/icon-arrow-down.svg'
import DownRight from '../../assets/icon-arrow-right.svg'
import LeftArrow from '../../assets/icon-arrow-left.svg'
import IconPlus from '../../assets/icon-plus.svg'
import { InvoiceType } from "../../constants/interfracer";
import { formatDate, getStatusColor } from "../../utilities";
import InvoiceDetails from "./InvoiceDetails";
import { getInvoiceContext } from "../../contexts/Invoice";
import { currentInvoiceState } from "../../store/slices/invoiceSlice";
import EmptyInvoice from "./EmptyInvoice";
import Status from "./Status";

const Invoice = () => {
  const [invoicesList, setInvoicesList] = useState<InvoiceType[]>([]);
  const [invoiceDescripiton, setInvoiceDescription] = useState<InvoiceType>();
  const invoices = currentInvoiceState()
  const { setDisplayData } = getInvoiceContext();
  const handleDisplayInvoiceDescription = (invoice: any) => {
    setInvoiceDescription(invoice)
  }
  useEffect(() => {
    setInvoicesList(invoices.invoices)
  }, [invoices.invoices])
  
  return (
    <div  className="top-0 w-[87%] m-10 absolute left-[10%]">
    {invoiceDescripiton && (
      <div className="flex items-center cursor-pointer mb-8 gap-2"  onClick={() => setInvoiceDescription(undefined)}>
          <LeftArrow />
        <strong>Go Back</strong>
      </div>
    )}
    {!invoiceDescripiton ? (
    <div>
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-white">Invoices</h2>
          <p>{invoicesList.length ? `There are ${invoicesList.length} total invoices.` : 'No Invoices'}</p>
        </div>
        <div className="flex items-center gap-1">
          <h2>Filter by status</h2>
          <DownArrow />
        </div>
        <div className="text-white">
          <button className="flex items-center bg-blue-500 pl-1 pr-4 py-2 rounded-3xl" onClick={() => setDisplayData({add: 'adding'})}>
            <div className="bg-white items-center p-2 rounded-2xl mr-4">
              <IconPlus />
            </div>
            New Invoice
          </button>
        </div>
      </div>
      <div>
        {invoicesList.length ? invoicesList.map((invoice) => {
          const { id, createdAt, clientName, total, status,paymentDue } = invoice
          return (
            // <Link href={`/invoices/id`} passHref>
              <div key={invoice?.id} className="flex items-center justify-between rounded-xl p-7 bg-[var(--secondary-color)] mb-8 transition hover:border-[var(--primary-color)] hover:border hover:scale-y-110 cursor-pointer"  onClick={() => handleDisplayInvoiceDescription(invoice)}>
                <div>
                  <h2>#{id}</h2>
                </div>
                <div>
                  <h6>Due   {formatDate(paymentDue)}</h6>
                </div>
                <div>
                  <p className="font-medium">{clientName}</p>
                </div>
                <div>
                  <h2 className="font-bold">€{total}</h2>
                </div>
                <div className="flex items-center gap-3 cursor-pointer">
                  <Status status={status} />
                  <DownRight />
                </div>
              </div>
            // </Link>
          )
        }) : <EmptyInvoice />}
      </div>
    </div>
    ) : (
      <InvoiceDetails invoiceData={invoiceDescripiton} onBack={() => setInvoiceDescription(undefined)} />
    )}
    </div>
  );
};

export default Invoice;
