import React,{createContext,Dispatch,SetStateAction,useContext, useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { invoice_dummy_data } from '../constants/data';
import { currentInvoiceState, populateInvoice } from '../store/slices/invoiceSlice';

interface Ctx{
    displayData?: any;
    setDisplayData?: Dispatch<SetStateAction<any>> | any;
}

const InvoiceContext = createContext<Ctx>({
    displayData: null,
    setDisplayData: () => {}
});


const InvoiceContextProvider = ({children}: {children: React.ReactNode}) => {
  const [displayData, setDisplayData] = useState<any>();
  const dispatch = useDispatch()

  useEffect(() => {
    if (invoice_dummy_data.length) {
      dispatch(populateInvoice(invoice_dummy_data))
    }
  }, [])

  return (
    <InvoiceContext.Provider value={{
        displayData,
        setDisplayData
    }}>
        {children}
    </InvoiceContext.Provider>
  )
}

export default InvoiceContextProvider

export const getInvoiceContext = () => useContext(InvoiceContext)
