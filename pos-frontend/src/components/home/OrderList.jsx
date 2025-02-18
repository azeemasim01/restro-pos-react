import React from "react";
import { FaCheckDouble, FaCircle } from "react-icons/fa";

const OrderList = () => {
  return (
    <div className="flex items-center gap-6 p-1">
      <button className="bg-[#f6b100] text-[#1f1f1f] text-xl p-3 font-bold rounded-md">AM</button>
      <div className="flex items-center justify-between w-full">
        <div>
          <h1 className="text-[#f5f5f5] font-semibold">Amrit Raj</h1>
          <p className="text-[#ababab] text-sm">8 Items</p>
        </div>
        
        <div>
          <h1 className="text-[#f6b100] rounded-lg border border-[#f6b100] px-2 py-1">Table # 2</h1>          
        </div>

        <div>
          <h1 className="text-green-600 px-1"><FaCheckDouble className="inline mr-2" />Ready</h1>
          <p className="text-[#ababab] text-sm"><FaCircle className="text-green-600 inline mr-1" size={8} /> Ready to Serve</p>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
