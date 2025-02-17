import React from 'react'
import { FaHome } from 'react-icons/fa'
import { MdOutlineReorder, MdOutlineTableBar } from 'react-icons/md'
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 w-full bg-[#1a1a1a] flex justify-around items-center p-3 text-white">
      <button>
        <FaHome className="inline mr-2" size={20} /> Home
      </button>
      <button>
        <MdOutlineReorder className="inline mr-2" size={20} /> Orders
      </button>
      <button>
        <MdOutlineTableBar className="inline mr-2" size={20} />
        Tables
      </button>
      <button>
        <CiCircleMore className="inline mr-2" size={20} />
        More
      </button>

      <button className='bg-[#f6b100] text-[#1a1a1a] p-3 text-2xl rounded-full absolute bottom-5'>
        <BiSolidDish />
      </button>
    </div>
  );
}

export default BottomNav