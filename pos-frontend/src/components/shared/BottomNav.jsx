import React from 'react'
import { BiSolidDish } from 'react-icons/bi'
import { CiCircleMore } from 'react-icons/ci'
import { FaHome } from 'react-icons/fa'
import { MdOutlineReorder, MdTableBar } from 'react-icons/md'

const BottomNav = () => {
  return (
      <div className='fixed bottom-0 w-full bg-[#262626] text-[#f1f1f1] flex justify-around p-3'>
          <button><FaHome className='inline mr-2' size={20} />Home</button>
          <button><MdOutlineReorder className='inline mr-2' size={20} /> Orders</button>
          <button><MdTableBar className='inline mr-2' size={20} /> Tables</button>
          <button><CiCircleMore className='inline mr-2' size={20} /> More</button>

          <button className="bg-[#f6b100] p-5 rounded-full text-black absolute bottom-6" size={50}>
              <BiSolidDish />
          </button>
    </div>
  )
}

export default BottomNav