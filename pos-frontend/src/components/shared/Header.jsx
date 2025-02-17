import React from "react";
import logo from "../../assets/images/logo.png";
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a] w-full ">
      {/* logo */}
      <div className="flex items-center">
        <img src={logo} className="h-8 w-8 mr-3" alt="Restro Logo" />
        <h1 className="text-lg font-semibold text-[#f5f5f5]">Restro</h1>
      </div>

      {/* search */}
      <div className="flex items-center bg-[#333] px-3 py-1 rounded-lg">
        <FaSearch className="text-[#f5f5f5] " />
        <input
          type="text"
          placeholder="Search"
          className="bg-[#333] focus:outline-none text-[#f5f5f5] px-3"
        />
      </div>

      {/* logged in user */}
      <div className="flex items-center gap-3">
        <div>
          <FaBell className="text-[#f5f5f5] text-2xl" />
        </div>
        <div className="flex items-center gap-2">
          <FaUserCircle className="text-[#f5f5f5] text-4xl" />
          <div>
          <h1 className="text-md text-[#f5f5f5]">Azeem</h1>
          <p className="text-[#f5f5f5] text-xs">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
