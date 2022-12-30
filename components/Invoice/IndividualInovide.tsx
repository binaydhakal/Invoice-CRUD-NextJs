import React, { useState } from "react";
import {invoice_dummy_data} from '../../constants/data'
import DownArrow from '../../assets/icon-arrow-down.svg'
import DownRight from '../../assets/icon-arrow-right.svg'
import IconPlus from '../../assets/icon-plus.svg'

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

const IndividualInovide = ({invoiceData}: {invoiceData: Invoice}) => {
  const { id, createdAt, paymentDue, description, paymentTerms, clientAddress, clientEmail, clientName, senderAddress, item, total, status} = invoiceData;
  return (
    <div className="flex-col">
        <div className="flex items-center bg-[#252945] px-4 py-4 mb-10 rounded-sm rounded overflow-hidden shadow-lg">
            <div className="flex-row flex-1">
                <div>Status</div>
                <div>{status}</div>
            </div>
            <div className="">
                <button className="bg-[#1E2139] p-4 mr-2 rounded-3xl">Edit</button>
                <button className="bg-[#EC5757] p-4 mr-2 rounded-3xl">Delete</button>
                <button className="bg-[#7C5DFA] p-4 rounded-3xl">Mark as Paid</button>
            </div>
        </div>
        <div className="flex-col items-center bg-[#252945] px-4 py-4 mb-4 rounded-sm rounded overflow-hidden shadow-lg">
            <div className="flex">
                <div className="flex-1">
                    <h4>#{id}</h4>
                    <div>{description}</div>
                </div>
                <div>
                    <div>{senderAddress.street}</div>
                    <div>{senderAddress.city}</div>
                    <div>{senderAddress.postcode}</div>
                    <div>{senderAddress.country}</div>
                </div>
            </div>
            <div className="flex">
                <DisplayDetails type='Invoice Date' details={createdAt} />
                <div>
                    <DisplayDetails type='Bill To' details={clientName} />
                <div>{clientAddress.street}</div>
                <div>{clientAddress.city}</div>
                <div>{clientAddress.postcode}</div>
                <div>{clientAddress.country}</div>
                </div>
                <DisplayDetails type='Sent to' details={clientEmail} />
                <DisplayDetails type='Payment Due' details={paymentDue} />
            </div>
        </div>
        
    </div>
  );
};

export default IndividualInovide;


const DisplayDetails = ({type, details}: {type: string; details: string}) => {
    return (
        <div>
            <div>{type}</div>
            <strong>{details}</strong>
        </div>
    )
}