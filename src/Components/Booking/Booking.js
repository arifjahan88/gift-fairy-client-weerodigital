import React from "react";
import { useLoaderData } from "react-router-dom";

const Booking = () => {
  const bookingData = useLoaderData();
  console.log(bookingData);
  return (
    <div className="max-w-[1234px] mx-auto grid grid-cols-3 gap-5">
      <img className="col-span-2 rounded-l-lg" src={bookingData.image} alt="" />
      <div>
        <h2>This is Cart details</h2>
      </div>
    </div>
  );
};

export default Booking;
