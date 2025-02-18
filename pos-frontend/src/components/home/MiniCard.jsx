import React from "react";

const MiniCard = ({ title, icon, number, footerNum }) => {
  return (
    <div className="bg-[#1a1a1a] w-1/2 p-3 rounded-md">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-[#f1f1f1]">{title}</h3>
              <button className={`${ title === "Total Earnings" ? "bg-[#02ca3a]" : "bg-[#f6b100]" } text-3xl p-3 text-black rounded-md`}>{icon}</button>
      </div>
      <div>
        <h1 className="text-[#f1f1f1] text-4xl mt-3">{number}</h1>
        <h1 className="text-[#02ca3a] mt-3">{footerNum}% <span className="text-[#f1f1f1]"> more than yesterday</span></h1>
      </div>
    </div>
  );
};

export default MiniCard;
