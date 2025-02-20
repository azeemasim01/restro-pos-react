import React from "react";
import BackButton from "../components/shared/BackButton";
import { MdRestaurantMenu } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaNotesMedical } from "react-icons/fa";
import MenuContainer from "../components/menu/MenuContainer";

const Menu = () => {
  return (
    <section>
      <div className="flex justify-between items-start p-4 gap-4 bg-[#1a1a1a]">
        {/* left */}
        <div className="flex-3 flex-col">
          <div className="flex justify-between items-center ">
            <div className="flex flex-row gap-4">
              <BackButton />
              <h1 className="text-2xl">Menu</h1>
            </div>
            <div className="flex">
              <MdRestaurantMenu size={50} className="inline mr-3" />
              <div>
                <h1>Customer Name</h1>
                <h1>Table No</h1>
              </div>
            </div>
          </div>
          <MenuContainer />
        </div>
        {/* right */}
        <div className="flex-1 bg-[#2a2a2a] h-screen">
          <div className="flex justify-between items-start p-4">
            <div>
              <h1 className="text-xl">Customer Name</h1>
              <p className="text-sm mt-2 text-[#ababab]">#101/Dine In</p>
              <p className="text-sm mt-2 text-[#ababab]">
                January 19, 2025 05:35 PM
              </p>
            </div>
            <div>
              <button className="bg-[#F6B100] text-xl p-3 font-bold rounded-lg text-[#1f1f1f]">
                CN
              </button>
            </div>
          </div>
          <hr className="border-[#3a3a3a] border-t-2 " />
          <div className="px-4 py-2">
          <h1 className="text-lg">Order Details</h1>
          </div>
          <div className="px-4 py-2 text-[#ababab]">
            <div className="bg-[#1f1f1f] p-2">
              <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Chicken Tikka</h1>
                <p>x2</p>
              </div>
              <div className="flex justify-between mt-2">
                <div className="flex gap-2">
                  <RiDeleteBin2Fill className="cursor-pointer" size={20} />
                  <FaNotesMedical className="cursor-pointer" size={20} />
                </div>
                <p className="font-semibold">123 Rs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
