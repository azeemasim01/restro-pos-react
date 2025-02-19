import React from 'react'
import { useNavigate } from 'react-router-dom'

const TableCard = ({ name, initial, status, seats, key }) => {
  
  const navigate = useNavigate();
  const handleClick = () => {
    if (status === "Booked") return;
    navigate('/menu');
  };

  return (
    <div onClick={handleClick} key={key} className="bg-[#262626] rounded-lg pb-5">
      <div className="flex justify-between p-4">
        <h1>{name}</h1>
        <p
          className={`${
            status == "Booked"
              ? "text-green-600  bg-[#2e4a40]"
              : "text-amber-600 bg-amber-900"
          } rounded-lg px-2 text-sm `}
        >
          {/* <FaCheckDouble className="inline mr-1 align-text-top" /> */}
          {status}
        </p>
      </div>

      <div className="flex justify-center items-center m-4">
        <h1 className="bg-[#f6b100] p-5 rounded-full text-[#1a1a1a] font-bold ">
          {" "}
          {initial}{" "}
        </h1>
      </div>
    </div>
  );
}

export default TableCard