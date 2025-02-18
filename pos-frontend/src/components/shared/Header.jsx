import React from 'react'
import logo from '../../assets/images/logo.png'
import { FaBell, FaSearch, FaUserCircle } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Restro Logo" className="h-8 w-8" />
        <h1 className="text-lg font-semibold text-[#f5f5f5] ">Restro</h1>
      </div>

      {/* search */}
      <div className="flex items-center gap-2">
        <FaSearch className="text-[#f5f5f5]" />
        <input
          type="text"
          placeholder="Search"
          className="bg-[#333] px-2 py-1 rounded-md text-[#f5f5f5] outline-none"
        />
      </div>

      {/* Logged in user */}
      <div className="flex items-center gap-4">
        <FaBell className="text-[#f5f5f5]" />
        <FaUserCircle className="text-[#f5f5f5]" />
        
        {/* <img
          src="https://randomuser.me/api/portraits/thumb/women/52.jpg"
          alt="User"
          className="h-8 w-8 rounded-full"
        /> */}
      </div>
    </header>
  );
}

export default Header