import React, { useState } from "react";
import { menus } from "../../constants/";
import { GrRadialSelected } from "react-icons/gr";
import { getBgColor } from "../../utils";

const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);
  const [itemsCount, setItemsCount] = useState(0);
  const [itemId, setItemId] = useState(0);

  const increment = (id) => {
    setItemId(id);
    if (itemsCount >= 6) return;
    setItemsCount((prev) => prev + 1);
  };
  const decrement = (id) => {
    setItemId(id);
    if (itemsCount <= 0) return;
    setItemsCount((prev) => prev - 1);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4 py-4">
        {menus.map((menu) => (
          <div
            key={menu.id}
            className={`${getBgColor()} p-4 rounded-md`}
            onClick={() => {
              setSelected(menu)
              setItemId(0)
              setItemsCount(0)
            }}
          >
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold">
                <span className="mr-4">{menu.icon}</span>
                {menu.name}
              </h1>
              {selected.id === menu.id && <GrRadialSelected size={20} />}
            </div>
            <div className="text-sm [text-shadow:_1px_1px_2px_rgb(0_0_0_/_0.8)]">
              {menu.items.length} items
            </div>
          </div>
        ))}
      </div>

      <hr className="border-[#2a2a2a] border-t-2 mt-4" />

      <div className="grid grid-cols-4 gap-4 py-4">
        {selected?.items.map((menu) => (
          <div
            key={menu.id}
            className="bg-[#2a2a2a] hover:bg-[#3a3a3a] p-4 rounded-md"
          >
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold">{menu.name}</h1>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm [text-shadow:_1px_1px_2px_rgb(0_0_0_/_0.8)]">
                {menu.price} Rs.
              </div>
              <div className="flex justify-between items-center rounded-lg gap-6 p-2 px-4 bg-[#1f1f1f]">
                <button
                  onClick={()=>decrement(menu.id)}
                  className="text-yellow-400"
                >
                  &minus;
                </button>
                <span> {menu.id == itemId ? itemsCount : 0} </span>
                <button
                  onClick={()=>increment(menu.id)}
                  className="text-yellow-400"
                >
                  &#43;
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuContainer;
