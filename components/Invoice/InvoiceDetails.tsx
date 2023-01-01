import React, { useState } from "react";
import { Table } from '@nextui-org/react';
import { InvoiceType } from "../../constants/interfracer";
import { getStatusColor } from "../../utilities";

const InvoiceDetails = ({invoiceData}: {invoiceData: InvoiceType}) => {
  const { id, createdAt, paymentDue, description, paymentTerms, clientAddress, clientEmail, clientName, senderAddress, items, total, status} = invoiceData;
  return (
    <div className="flex-col">
        <div className="flex items-center justify-between p-7 rounded-lg mb-8 bg-[var(--secondary-color)] rounded overflow-hidden shadow-lg">
            <div className="flex items-center gap-x-6">
                <p>Status</p>
                <button className={`${getStatusColor(status)}`}>{status}</button>
            </div> 
            <div className="flex items-center gap-x-4">
                <button className="bg-[var(--edit-btn-bg)] p-[12px] rounded-2xl">Edit</button>
                <button className="bg-[var(--delete-btn-bg)] p-[12px] rounded-2xl">Delete</button>
                <button className="bg-[var(--primary-color)] p-[12px] rounded-2xl">Mark as Paid</button>
            </div>
        </div>
        <div className="bg-[var(--secondary-color)] p-[30px] rounded-[10px] rounded overflow-hidden shadow-lg">
            <div className="flex justify-between mb-[1.9rem]">
                <div>
                    <h4>#{id}</h4>
                    <p>{description}</p>
                </div>
                <div>
                    <p>{senderAddress.street}</p>
                    <p>{senderAddress.city}</p>
                    <p>{senderAddress.postcode}</p>
                    <p>{senderAddress.country}</p>
                </div>
            </div>
            <div className="flex justify-between mb-[1.9rem]">
                <div>
                    <DisplayDetails type='Invoice Date' details={createdAt} css='mb-[1.9rem]' />
                    <DisplayDetails type='Payment Due' details={paymentDue} css='mb-[5px]' />
                </div>
                <DisplayDetails type='Bill To' details={clientName} pcss='mb-1'>
                    <p className="mb-1">{clientAddress.street}</p>
                    <p className="mb-1">{clientAddress.city}</p>
                    <p className="mb-1">{clientAddress.postcode}</p>
                    <p className="mb-1">{clientAddress.country}</p>
                </DisplayDetails>
                <DisplayDetails type='Sent to' details={clientEmail} css='mb-[10px]' />
            </div>
            <div className="bg-[#252945] p-[30px] rounded-lg">
                <ul className="list-none">
                    <li className="flex items-center justify-between mb-4">
                        <p className="w-[50%]">Item Name</p>
                        <p className="w-[25%] text-right">QTY.</p>
                        <p className="w-[25%] text-right">Price</p>
                        <p className="w-[25%] text-right">Total</p>
                    </li>
                    {items.map((item, index) => {
                        const { name, quantity, price, total} = item
                        return (
                        <li className="flex items-center justify-between mb-4">
                            <div className="w-[50%]"><h5>{name}</h5></div>
                            <div className="w-[25%] text-right"><p>{quantity}</p></div>
                            <div className="w-[25%] text-right"><p>{price}</p></div>
                            <div className="w-[25%] text-right"><p>{total}</p></div>
                        </li>
                        )
                    })}
                </ul>

            </div>
            <div className="bg-[#0c0e16] p-[30px] mb-[30px] rounded-b-3xl flex items-center justify-between">
                <h5>Amount Due</h5>
                <h2>$2541.10</h2>
            </div>
        </div>
        
    </div>
  );
};

export default InvoiceDetails;


const DisplayDetails = ({type, details, children, css, pcss, hcss}: {type: string; details: string; children?: React.ReactNode; css?: string; pcss?: string; hcss?: string}) => {
    return (
        <div className={css}>
            <p className={pcss}>{type}</p>
            <h4 className={hcss}>{details}</h4>
            {children}
        </div>
    )
}