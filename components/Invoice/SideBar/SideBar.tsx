import Image from 'next/image'
import React from 'react'
import Avatar from '../../../assets/image-avatar.jpg'

const SideBar = () => {
  return (
    <div className='w-28 h-screen bg-[var(--secondary-color)] text-white fixed top-0 left-0 z-[999] rounded-r-2xl'>
      <div className='flex flex-col justify-between w-full h-full'>
        <div className='w-full h-24 flex items-center justify-center bg-[var(--primary-color)] rounded-r-2xl'>
          <div>
            <h2>Muhib</h2>
          </div>
        </div>
        <div className='w-full h-24 flex items-center justify-center rounded-r-2xl border-t border-[var(--primary-color)]'>
          <Image className='rounded-3xl' src={Avatar} alt='avatar' width='40' height='40' />
        </div>
      </div>
    </div>
  )
}

export default SideBar