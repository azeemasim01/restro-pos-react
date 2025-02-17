import React, { useEffect, useState } from "react";

const Greetings = () => {

  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // format date and time "January 1, 2022 12:00:00"
  const date = dateTime.toLocaleDateString("en-US", {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const time = dateTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });



  return (
    <div className="flex justify-between w-full">
      <div>
        <h1 className="text-2xl">Good Morning, Admin</h1>
        <p className="text-xs">Give your best services to customers 🍕</p>
      </div>
      <div>
        <h1 className="text-2xl">{time}</h1>
        <p className="text-xs">{date}</p>
      </div>
    </div>
  );
};

export default Greetings;
