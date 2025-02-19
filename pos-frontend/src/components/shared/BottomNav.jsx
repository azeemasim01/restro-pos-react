import React from "react";
import { BiSolidDish } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 w-full bg-[#1a1a1a] text-[#f1f1f1] flex justify-around p-3">
      <button onClick={() => navigate("/")}>
        <FaHome className="inline mr-2" size={20} />
        Home
      </button>
      <button onClick={() => navigate("/orders")}>
        <MdOutlineReorder className="inline mr-2" size={20} /> Orders
      </button>
      <button onClick={() => navigate("/tables")}>
        <MdTableBar className="inline mr-2" size={20} /> Tables
      </button>
      <button onClick={() => navigate("/")}>
        <CiCircleMore className="inline mr-2" size={20} /> More
      </button>

      <button
        onClick={() => navigate("/")}
        className="bg-[#f6b100] p-4 rounded-full text-black absolute bottom-6 text-xl"
      >
        <BiSolidDish />
      </button>
    </div>
  );
};

export default BottomNav;
