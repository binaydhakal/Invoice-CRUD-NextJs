import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { InvoiceType, Item } from '../../constants/interfracer'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { getRandomId, getRandomUniqueId } from '../../utilities'

const initialState: Array<InvoiceType> = []

export const invoiceSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    populateInvoice: (state, action) => {
      return [ ...action.payload ]
    },
    createInvoice: (state, action) => {
      const { items } = action.payload
      const id = getRandomUniqueId()
      let total: number = 0;
      items?.map((item: Item) => total = item.total + total);
      const new_item = { ...action.payload, id, total, paymentDue: action.payload?.createdAt }
      return [ ...state, new_item ]
    },
    updateInvoice: (state, action) => {
      const updatedState = state.map((inv) => {
        if (inv.id === action.payload?.id) {
          return { ...inv, ...action.payload, paymentDue: action.payload?.createdAt }
        }
        return inv
      })
      return [ ...updatedState ]
    },
    deleteInvoice: (state, action) => {
      let updatedState = state.filter((inv) => {
        if (inv.id === action.payload.id) return false
        return true
      })
      return [ ...updatedState ]
    },
  },
})

// Action creators are generated for each case reducer function
export const { populateInvoice, createInvoice, updateInvoice, deleteInvoice } = invoiceSlice.actions

export const currentInvoiceState = () => useSelector((state: RootState) => state)

export default invoiceSlice.reducer