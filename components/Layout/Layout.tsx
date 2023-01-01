import React from 'react'
import CrudInvoice from '../Invoice/CrudInvoice'
import SideBar from '../SideBar/SideBar'

interface Props {
    children?: React.ReactNode
}

const Layout = (props: Props) => {
  return (
    <div className='flex flex-row text-white'>
        <SideBar />
        <CrudInvoice />
        {/* {props.children} */}
    </div>
  )
}

export default Layout