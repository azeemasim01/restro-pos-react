import React, { useState } from 'react'
import { menus } from '../../constants/'
import { GrRadialSelected } from 'react-icons/gr'
import { getBgColor } from '../../utils';

const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);

  return (
    <>
      <div className="grid grid-cols-4 gap-4 py-4">
        {menus.map((menu) => (
          <div
            key={menu.id}
            className={`${getBgColor()} p-4 rounded-md`}
            onClick={() => setSelected(menu)}
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
            <div className="text-sm [text-shadow:_1px_1px_2px_rgb(0_0_0_/_0.8)]">
              {menu.price} Rs.
            </div>
          </div>
        ))}
      </div>      
    </>
  );
}

export default MenuContainer