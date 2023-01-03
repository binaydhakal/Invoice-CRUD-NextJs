import React from 'react'
import { getStatusColor } from '../../utilities'

const Status = ({status}:{status: string | undefined}) => {
  return (
    <div className={`flex flex-row items-center justify-center py-1.5 px-3 w-24 rounded-md text-center border-0 outline-0 capitalize ${getStatusColor(status)} gap-1`}>
        <div className="h-[10px] w-[10px] rounded-[50%] mb-[2px]" />
        {status}
    </div>
  )
}

export default Status