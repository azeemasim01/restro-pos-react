import React from "react";
import { FaCheckDouble, FaCircle } from "react-icons/fa";

const OrderCard = () => {
  return (
    <div className="wrapper w-full sm:w-[48%] xl:w-[23%] bg-[#333] p-2 rounded-xl">
      <div className="flex items-center gap-3 ">
        <button className="bg-[#f6b100] text-[#1f1f1f] text-xl p-3 font-bold rounded-md">
          AM
        </button>
        <div className="flex items-center justify-between w-full">
          <div>
            <h1 className="text-[#f5f5f5] font-semibold">Amrit Raj</h1>
            <p className="text-[#ababab] text-sm">8 Items</p>
          </div>

          <div>
            <h1 className="text-green-600 text-sm text-right">
              <FaCheckDouble className="inline mr-1" />
              Ready
            </h1>
            <p className="text-[#ababab] text-sm">
              <FaCircle className="text-green-600 inline mr-1" size={8} /> Ready
              to Serve
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center p-2">
        <p className="text-xs text-[#ababab]">February 18, 2025 09:16 PM</p>
        <p className="text-xs ">8 Items</p>
      </div>
      <hr className="border-[#555]" />
      <div className="flex justify-between items-center p-2">
        <p className="text-xs">Total:</p>
        <p className="text-xs">$250.00</p>
      </div>
    </div>
  );
};

export default OrderCard;
