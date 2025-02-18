import React, { useState } from "react";
import OrderCard from "../components/orders/OrderCard";
import BackButton from "../components/shared/BackButton";

const Orders = () => {
  const [status, setStatus] = useState("all");

  return (
    <section className=" overflow-hidden ">
      <div className="flex justify-between items-center p-4 bg-[#1a1a1a]">
        <div className="flex items-center gap-4">
        <BackButton />
        <h1 className="text-2xl">Orders</h1>
        </div>
        <div className="flex gap-4 text-[#ababab]">
          <button onClick={()=>setStatus('all')} className="bg-[#383838] rounded-lg px-4 py-2">All</button>
          <button onClick={()=>setStatus('progress')}>In Progress</button>
          <button onClick={()=>setStatus('ready')}>Ready</button>
          <button onClick={()=>setStatus('completed')}>Completed</button>
        </div>
      </div>
      <div className="orderslist flex gap-4 p-3 flex-wrap justify-center"> 
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
      </div>
    </section>
  );
};

export default Orders;
