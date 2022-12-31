import React from 'react'
import SideBar from '../Invoice/SideBar/SideBar'

interface Props {
    children?: React.ReactNode
}

const Layout = (props: Props) => {
  return (
    <div className='flex flex-col'>
        <SideBar />
        <div>{props.children}</div>
    </div>
  )
}

export default Layout