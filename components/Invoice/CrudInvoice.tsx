import React, { useState } from 'react'
import { Item } from '../../constants/interfracer';

const CrudInvoice = () => {
  const [items, setItems] = useState<Array<Item>>([{ name: '' , quantity: 0, price: 0, total: 0}]);

  const addItem = () => {
    setItems([ ...items, { name: '' , quantity: 0, price: 0, total: 0}])
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const { name, value } = event.target;
    const list: any = [ ...items ]
    list[i][name] = value
    list[i]['total'] = list[i]['quantity'] * list[i]['price']
    setItems(list)
  }

  const removeItem = (i: number) => {
    const copy_data = [ ...items ]
    copy_data.splice(i, 1);
    setItems(copy_data);
  }
  return (
    <div className='main_container'>
         <div className="new_invoice w-[60%] m-auto">
            <div className="new_invoice-header mb-8">
                <h3>New Invoice</h3>
            </div>
            <div className="new_invoice-body pb-10">
                <div className="bill_from">
                    <p className="bill_title mb-5">Bill From</p>
                    <div className="form__group">
                        <p>Street Address</p>
                        <input type='text' />
                    </div>
                    <div className="form__group inline_from-group">
                        <div>
                            <p>City</p>
                            <input type="text" />
                        </div>

                        <div>
                            <p>Postal Code</p>
                            <input type="text" />
                        </div>
                
                        <div>
                            <p>Country</p>
                            <input type="text" />
                        </div>
                    </div>
                </div>

                <div className="bill_to mt-12">
                    <p className="bill_title">Bill To</p>
                    <div className="form__group">
                        <p>Client Name</p>
                        <input type='text' />
                    </div>
                    <div className="form__group">
                        <p>Client Email</p>
                        <input type='email' />
                    </div>
                    <div className="form__group">
                        <p>Street Address</p>
                        <input type='text' />
                    </div>
                    <div className="form__group inline_from-group">
                        <div>
                            <p>City</p>
                            <input type="text" />
                        </div>

                        <div>
                            <p>Postal Code</p>
                            <input type="text" />
                        </div>
                
                        <div>
                            <p>Country</p>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="form__group inline_from-group">
                        <div className="inline_group">
                            <p>Invoice Date</p>
                            <input type="date" />
                        </div>

                        <div className="inline_group">
                            <p>Payment Terms</p>
                            <input type="text" />
                        </div>
                    </div>

                    <div className="form__group">
                        <p>Project Description</p>
                        <input type='email' />
                    </div>
                </div>

                <div className="invoice__items mt-[70px]">
                    <h3 className="mb-7">Item List</h3>
                    {items?.map((item: Item, i: number) => {
                        return (
                            <div className="item" key={i}>
                                <div className="form__group inline_from-group">
                                    <div>
                                        <p>Item Name</p>
                                        <input type="text" name="name" onChange={e => handleChange(e,i)} />
                                    </div>

                                    <div>
                                        <p>Qty</p>
                                        <input type="number" name="quantity" onChange={e => handleChange(e,i)} />
                                    </div>

                                    <div>
                                        <p>Price</p>
                                        <input type="number" name="price" onChange={e => handleChange(e,i)} />
                                    </div>

                                    <div>
                                        <p>Total</p>
                                        <h4>{item?.total}</h4>
                                    </div>

                                    <button className="edit__btn" onClick={() => removeItem(i)}>Delete</button>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <button className="add__item-btn" onClick={addItem}>Add New Item</button>

                <div className="new__invoice__btns">
                    <button className="edit__btn bg-white text-[var(--secondary-color)] rounded-3xl">Discard</button>
                    <div>
                        <button className="draft__btn rounded-3xl">Save as Draft</button>
                        <button className="mark__as-btn bg-[var(--primary-color)] rounded-3xl">Send & Save</button>
                    </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default CrudInvoice