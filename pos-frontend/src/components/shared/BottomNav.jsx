import React, { useState } from "react";
import { BiSolidDish } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const BottomNav = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(0);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const increment = () => {
    if (guestCount >= 6) return;
    setGuestCount((prev) => prev + 1);
  };
  const decrement = () => {
    if (guestCount <= 0) return;
    setGuestCount((prev) => prev - 1);
  };

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

      {/* open modal button */}
      <button
        onClick={openModal}
        className="bg-[#f6b100] p-4 rounded-full text-black absolute bottom-6 text-xl"
      >
        <BiSolidDish />
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order">
        <div>
          <label htmlFor="" className="text-[#ababab] ">
            Customer Name
          </label>
          <div className="flex items-center rounded-lg mt-2 p-2 px-4 bg-[#1f1f1f]">
            <input
              type="text"
              placeholder="Enter customer name"
              className="w-full rounded-lg bg-transparent flex-1 focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label htmlFor="" className="text-[#ababab] ">
            Customer Phone
          </label>
          <div className="flex items-center rounded-lg mt-2 p-2 px-4 bg-[#1f1f1f]">
            <input
              type="number"
              placeholder="Enter customer phone"
              className="w-full rounded-lg bg-transparent flex-1 focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label htmlFor="" className="text-[#ababab] ">
            Guest
          </label>
          <div className="flex justify-between items-center rounded-lg p-2 px-4 bg-[#1f1f1f]">
            <button onClick={decrement} className="text-yellow-400">
              &minus;
            </button>
            <span>{guestCount} Persons</span>
            <button onClick={increment} className="text-yellow-400">
              &#43;
            </button>
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              navigate("/tables");
              closeModal();
            }}
            className="w-full bg-[#f6b100] text-[#1f1f1f] p-2 mt-8 rounded-lg"
          >
            Create Order
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default BottomNav;
