import React from "react";
import { useLoaderData } from "react-router-dom";
import BookingCard from "./BookingDetails/BookingCard";

const BookingCart = () => {
  const bookingData = useLoaderData();

  return (
    <div className="max-w-[1234px] mx-auto grid grid-cols-3 gap-5">
      <BookingCard bookingData={bookingData} />
    </div>
  );
};

export default BookingCart;
