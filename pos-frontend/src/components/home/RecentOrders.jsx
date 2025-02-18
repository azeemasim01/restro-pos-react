import React from 'react'
import { FaSearch } from 'react-icons/fa';
import OrderList from './OrderList';

const RecentOrders = () => {
  return (
    <div className="bg-[#1a1a1a] w-full p-3 rounded-md h-96">
      <div className="flex justify-between items-center">
        <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
          Recent Orders{" "}
        </h1>
        <h1 className="font-semibold text-blue-500">View All</h1>
      </div>
      <div>
        {/* search */}
        <div className="flex items-center gap-2">
          <FaSearch className="text-[#f5f5f5]" />
          <input
            type="text"
            placeholder="Search"
            className="bg-[#1F1F1F] rounded-md text-[#f5f5f5] p-2 outline-none w-full"
          />
              </div>
              <div className='mt-3'>
                  <OrderList />
              </div>
      </div>
    </div>
  );
};

export default RecentOrders