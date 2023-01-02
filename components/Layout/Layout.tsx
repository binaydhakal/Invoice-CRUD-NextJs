import React from 'react'
import SideBar from '../SideBar/SideBar'

interface Props {
    children?: React.ReactNode
}

const Layout = (props: Props) => {
  return (
    <div className='flex flex-row text-white'>
        <SideBar />
        {props.children}
    </div>
  )
}

export default Layout