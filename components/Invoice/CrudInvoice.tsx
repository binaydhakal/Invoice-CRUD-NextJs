import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import DeleteIcon from '../../assets/icon-delete.svg'
import AddIcon from '../../assets/icon-plus.svg'
import { InvoiceType, Item } from '../../constants/interfracer';
import { getInvoiceContext } from '../../contexts/Invoice';
import { createInvoice, updateInvoice } from '../../store/slices/invoiceSlice';
import { initialInvoice } from '../../utilities';

const CrudInvoice = () => {
  const [inoviceDetails, setInoviceDetails] = useState<InvoiceType>(initialInvoice);
  const [items, setItems] = useState<Array<Item>>([{ name: '' , quantity: 0, price: 0, total: 0}]);
  const { displayData, setDisplayData } = getInvoiceContext()
  const dispatch = useDispatch()
  const isEditInvoice = !!displayData?.id
  const { senderAddress, createdAt, clientAddress, clientName, paymentDue, paymentTerms, clientEmail, description } = inoviceDetails;

  const addItem = () => {
    setItems([ ...items, { name: '' , quantity: 0, price: 0, total: 0}])
  }

  useEffect(() => {
    if (displayData?.id) {
        let updating_data = displayData;
        setItems(updating_data?.items)
        setInoviceDetails({ ...updating_data })
    }
  }, [displayData])
  

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    let load_data_to: Array<string> | string = name;
    
    if (name.includes('.')) load_data_to = name.split('.');
    const list: any = inoviceDetails;
    if (typeof load_data_to === 'string') {
        list[load_data_to] = value
        setInoviceDetails(list)
    }
    else {
        list[load_data_to[0]] = { ...list[load_data_to[0]] || null }
        // let required_position = inoviceDetails;
        // load_data_to.map(pos => {
        //     required_position = list[pos]
        // })
        // required_position = value
        list[load_data_to[0]][load_data_to[1]] = value
        setInoviceDetails(list)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const { name, value } = event.target;
    const list: any = [ ...items ]
    const list_change = { ...list[i] }
    list_change[name] = value;
    list[i] = list_change
    list[i]['total'] = list[i]['quantity'] * list[i]['price']
    setItems(list)
  }

  const removeItem = (i: number) => {
    const copy_data = [ ...items ]
    copy_data.splice(i, 1);
    setItems(copy_data);
  }
  
  const handleSendAndSave = () => {
    const new_item = { ...inoviceDetails, items, status: 'paid' }
    if (isEditInvoice) dispatch(updateInvoice(new_item))
    else dispatch(createInvoice(new_item))
    setDisplayData(null)
  }

  const handleSaveAsDraft = () => {
    const new_item = { ...inoviceDetails, items, status: 'draft' }
    if (isEditInvoice) dispatch(updateInvoice(new_item))
    else dispatch(createInvoice(new_item))
    setDisplayData(null)
  }

  return (
    <div className='main_container z-[999] fixed left-28 bg-[#00000066] w-[94%]'>
         <div className="new_invoice flex flex-col h-[100vh] px-10 pt-10  w-[650px] bg-[var(--body-bg)]">
            <div className="new_invoice-header flex-shrink-0 mb-8">
                <h2>{`${displayData?.id ? `Edit #${displayData?.id}` : 'New Invoice'}`}</h2>
            </div>
            <div className="new_invoice-body flex-1 pb-10 pr-5 overflow-y-scroll">
                <div className="bill_from">
                    <h3 className="bill_title mb-5">Bill From</h3>
                    <div className="form__group">
                        <p>Street Address</p>
                        <input type='text' name="senderAddress.street" defaultValue={senderAddress.street} onChange={handleInputChange} />
                    </div>
                    <div className="form__group inline_from-group">
                        <div>
                            <p>City</p>
                            <input type="text" name="senderAddress.city" defaultValue={senderAddress.city} onChange={handleInputChange} />
                        </div>

                        <div>
                            <p>Postal Code</p>
                            <input type="text" name="senderAddress.postCode" defaultValue={senderAddress.postCode} onChange={handleInputChange} />
                        </div>
                
                        <div>
                            <p>Country</p>
                            <input type="text" name="senderAddress.country" defaultValue={senderAddress.country} onChange={handleInputChange} />
                        </div>
                    </div>
                </div>

                <div className="bill_to mt-12">
                    <h3 className="bill_title">Bill To</h3>
                    <div className="form__group">
                        <p>Client Name</p>
                        <input type='text' name="clientName" defaultValue={clientName} onChange={handleInputChange} />
                    </div>
                    <div className="form__group">
                        <p>Client Email</p>
                        <input type='email' name="clientEmail" defaultValue={clientEmail} onChange={handleInputChange} />
                    </div>
                    <div className="form__group">
                        <p>Street Address</p>
                        <input type='text' name="clientAddress.street" defaultValue={clientAddress.street} onChange={handleInputChange} />
                    </div>
                    <div className="form__group inline_from-group">
                        <div>
                            <p>City</p>
                            <input type="text" name="clientAddress.city" defaultValue={clientAddress.city} onChange={handleInputChange} />
                        </div>

                        <div>
                            <p>Postal Code</p>
                            <input type="text" name="clientAddress.postCode" defaultValue={clientAddress.postCode} onChange={handleInputChange} />
                        </div>
                
                        <div>
                            <p>Country</p>
                            <input type="text" name="clientAddress.country" defaultValue={clientAddress.country} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="form__group inline_from-group">
                        <div className="inline_group">
                            <p>Invoice Date</p>
                            <input type="date" name="createdAt" defaultValue={paymentDue} onChange={handleInputChange} />
                        </div>

                        <div className="inline_group">
                            <p>Payment Terms</p>
                            <input type="text" name="paymentTerms" defaultValue={paymentTerms} onChange={handleInputChange}/>
                        </div>
                    </div>

                    <div className="form__group">
                        <p>Project Description</p>
                        <input type='text' name="description" defaultValue={description} onChange={handleInputChange} />
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
                                        <input type="text" value={item.name} name="name" onChange={e => handleChange(e,i)} />
                                    </div>

                                    <div>
                                        <p>Qty</p>
                                        <input type="number" name="quantity" value={item.quantity} onChange={e => handleChange(e,i)} />
                                    </div>

                                    <div>
                                        <p>Price</p>
                                        <input type="number" name="price" value={item.price} onChange={e => handleChange(e,i)} />
                                    </div>

                                    <div>
                                        <p>Total</p>
                                        <h4>{item?.total}</h4>
                                    </div>
                                    <div className="mx-4 cursor-pointer" onClick={() => removeItem(i)}>
                                        <DeleteIcon />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <button className="add__item-btn" onClick={addItem}><AddIcon />Add New Item</button>
            </div>
            <div className={`new__invoice__btns flex-shrink-0 p-4`}>
                {!isEditInvoice && <button className="edit__btn bg-white text-[var(--secondary-color)] rounded-3xl" onClick={() => setDisplayData(undefined)}>Discard</button>}
                <div className={isEditInvoice ? 'right-0' : ''}>
                    {isEditInvoice ? <button className="draft__btn rounded-3xl" onClick={() => setDisplayData(undefined)}>Cancel</button> :
                    <button className="draft__btn rounded-3xl" onClick={() => handleSaveAsDraft()}>Save as Draft</button>}
                    <button className="mark__as-btn bg-[var(--primary-color)] rounded-3xl" onClick={() => handleSendAndSave()}>{isEditInvoice ? 'Save Changes' : 'Send & Save'}</button>
                </div>
            </div>
         </div>
    </div>
  )
}

export default CrudInvoice