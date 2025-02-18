import React from "react";
import { FaCheckDouble } from "react-icons/fa";

const OrderList = () => {
  return (
    <div className="flex items-center gap-6">
      <button className="bg-[#f6b100] text-xl p-3 font-bold rounded-md">AM</button>
      <div className="flex items-center justify-between w-full">
        <div>
          <h1 className="text-[#f5f5f5] font-semibold">Amrit Raj</h1>
          <p className="text-[#ababab] text-sm">8 Items</p>
        </div>
        <div>
          <h1 className="text-green-600 px-1"><FaCheckDouble className="inline mr-2" />Ready</h1>
          <p className="text-[#ababab] text-sm">Ready to Serve</p>
        </div>
        <div>
          <h1 className="text-[#f5f5f5] font-semibold">Ready</h1>
          <p className="text-[#ababab] text-sm">Ready to Serve</p>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
