import React, { useState } from "react";
import { Table } from '@nextui-org/react';
import { InvoiceType } from "../../constants/interfracer";

const IndividualInovide = ({invoiceData}: {invoiceData: InvoiceType}) => {
  const { id, createdAt, paymentDue, description, paymentTerms, clientAddress, clientEmail, clientName, senderAddress, items, total, status} = invoiceData;
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
            <div>
                <Table
                aria-label="Example table with static content"
                css={{
                    height: "auto",
                    minWidth: "100%",
                }}
                >
                <Table.Header>
                    <Table.Column css={{ background: 'none' }}>Item Name</Table.Column>
                    <Table.Column css={{ background: 'none' }}>QTY.</Table.Column>
                    <Table.Column css={{ background: 'none' }}>Price</Table.Column>
                    <Table.Column css={{ background: 'none' }}>Total</Table.Column>
                </Table.Header>
                <Table.Body>
                    {items.map((item, index) => {
                        const { name, quantity, price, total} = item
                        return (
                        <Table.Row key={`${index + 1}`}>
                            <Table.Cell css={{ color: 'White'}}>{name}</Table.Cell>
                            <Table.Cell css={{ color: 'White'}}>{quantity}</Table.Cell>
                            <Table.Cell css={{ color: 'White'}}>{price}</Table.Cell>
                            <Table.Cell css={{ color: 'White'}}>{total}</Table.Cell>
                        </Table.Row>
                        )
                    })}
                </Table.Body>
                </Table>
                <div className="flex">
                    <span className="flex-1">Amoutn Due</span>
                    <strong>$2541.10</strong>
                </div>
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