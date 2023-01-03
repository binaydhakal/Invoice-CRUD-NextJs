import React from 'react'
import EmptyDisplay from '../../assets/illustration-empty.svg'

const EmptyInvoice = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <EmptyDisplay />
        <div>
            <h1 className="my-10 text-2xl">There is nothing here</h1>
            <p>Create an invoice by clicking the</p>
            <p><strong>New Invoice</strong> button and get started</p>
        </div>
    </div>
  )
}

export default EmptyInvoice