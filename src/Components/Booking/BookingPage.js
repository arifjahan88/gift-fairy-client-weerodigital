import React, { useEffect, useState } from "react";
import BookingCard from "./BookingDetails/BookingCard";

const BookingPage = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("https://gift-fairy-server-weerodigital.vercel.app/giftdetails")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  return (
    <div className="max-w-[1234px] mx-auto grid grid-cols-3 gap-5">
      {details.map((data) => (
        <BookingCard bookingData={data} />
      ))}
    </div>
  );
};

export default BookingPage;
