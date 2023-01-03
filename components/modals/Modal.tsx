import React from 'react'

const Modal = ({data, onDelete, onCancel }: {data?: any; onDelete?: () => void; onCancel?: () => void}) => {
  return (
    <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
    <div className="bg-[var(--secondary-color)] px-8 py-10 rounded-2xl">
        <h4 className="text-xl mb-4 font-bold">Confirm Deletion</h4>
        <h3>{`Are you sure want to delete invoice ${data?.id}?This action`}</h3>
        <h3>cannot be undone.</h3>
        <div className="float-right mt-8">
            <button className="bg-[var(--edit-btn-bg)] px-4 py-2 rounded-3xl" onClick={onCancel}>Cancel</button>
            <button className="bg-[var(--delete-btn-bg)] px-7 py-2 ml-2 rounded-3xl font-semibold" onClick={onDelete}>Delete</button>
        </div>
    </div>
    </div>
  )
}

export default Modal