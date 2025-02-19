import React from "react";
import {popularDishes} from "../../constants/";

const PopularDishes = () => {
  return (
    <div className="bg-[#1a1a1a] w-full p-3 rounded-md">
      <div className="flex justify-between items-center">
        <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
          Popular Dishes
        </h1>
        <h1 className="font-semibold text-blue-500">View All</h1>
      </div>
      <div>
        {/* search */}
        {/* <div className="flex items-center gap-2">
          <FaSearch className="text-[#f5f5f5]" />
          <input
            type="text"
            placeholder="Search"
            className="bg-[#1F1F1F] rounded-md text-[#f5f5f5] p-2 outline-none w-full"
          />
        </div> */}
        <div className="mt-3 overflow-y-scroll no-scrollbar h-[75vh] p-3 xl:grid xl:grid-cols-2 xl:gap-3">
          {popularDishes.map((dish) => (
            <div
              key={dish.id}
              className="flex justify-between items-center bg-[#333] p-2 rounded-md mb-2"
            >
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-[#f5f5f5] text-xl mr-5">
                  {dish.id < 10 ? `0${dish.id}` : dish.id}
                </h1>
                
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div className="ml-5">
                  <h1 className="text-[#f5f5f5] font-semibold">{dish.name}</h1>
                  <p className="text-xs"><span className="text-[#ababab]">Orders: </span> {dish.numberOfOrders} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;
