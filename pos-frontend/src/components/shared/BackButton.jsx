import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";

const BackButton = () => {
  return (
    <button
      onClick={() => window.history.back()}
      className="bg-[#f6b100] p-2 rounded-full text-black text-xl"
    >
      <IoMdArrowRoundBack />
    </button>
  );
}

export default BackButton