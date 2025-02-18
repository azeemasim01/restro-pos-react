import React, { useEffect, useState } from "react";
import MiniCard from "./MiniCard";
import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";
import RecentOrders from "./RecentOrders";

const Greetings = () => {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div className=" ">
          <h1 className="text-4xl text-[#f5f5f5]">Good Morning, Amrit!</h1>
          <p className="text-[#ababab]">
            Give your best services to the customers 🥰
          </p>
        </div>
        <div>
          <h1 className="text-4xl text-white">
            {dateTime.toLocaleTimeString()}
          </h1>
          <p className="text-white">{formatDate(dateTime)}</p>
        </div>
      </div>
        <div className="flex items-center space-between gap-3 mt-5">
            <MiniCard title="Total Earnings" icon={<BsCashCoin />} number={512} footerNum={1.6} />
            <MiniCard title="In Progress" icon={<GrInProgress />} number={16} footerNum={3.6} />            
          </div>
          <div className="mt-3">
              <RecentOrders />
          </div>
    </>
  );
};

export default Greetings;
