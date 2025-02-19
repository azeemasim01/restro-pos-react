import React from "react";
import BackButton from "../components/shared/BackButton";
import { MdRestaurantMenu } from "react-icons/md";
import MenuContainer from "../components/menu/MenuContainer";

const Menu = () => {
  return (
    <section>
      <div className="flex justify-between items-center p-4 gap-4 bg-[#1a1a1a]">
        {/* left */}
        <div className="flex-3 flex justify-between items-center">
          <div className="flex gap-4">
            <BackButton />
            <h1 className="text-2xl">Menu</h1>
          </div>
          <div className="text-[#ababab] flex">
            <MdRestaurantMenu size={50} className="inline mr-3" />
            <div>
              <h1>Customer Name</h1>
              <h1>Table No</h1>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="flex-1 bg-amber-500">
          <h1>Right</h1>
        </div>
      </div>
      <MenuContainer />
    </section>
  );
};

export default Menu;
