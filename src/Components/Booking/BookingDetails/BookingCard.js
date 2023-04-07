import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import toast, { Toaster } from "react-hot-toast";

const cart = () => toast.success("Added to Cart");
const booking = () => toast.success("Your Booking Confirmed. Thanks For Your Booking");

const BookingCard = ({ bookingData }) => {
  return (
    <>
      <img className="col-span-2 rounded-l-lg" src={bookingData.image} alt="" />
      <div>
        <h2 className="text-4xl font-semibold">{bookingData.title}</h2>
        <div className="flex items-center mt-4">
          <div className="bg-amber-300 py-1 rounded-2xl text-white font-bold text-xl font-sans flex items-center justify-center w-[80px] my-1">
            <TiStarFullOutline className="text-white text-xl mr-1" />
            {bookingData.rating.number}
          </div>
          <div className="divider divider-horizontal"></div>
          <h2 className="font-sans text-gray-500 text-lg font-light">Booked 120</h2>
        </div>
        <p className="mt-5 text-justify">{bookingData.details}</p>
        <p className="mt-4 ">Price</p>
        <div className="flex">
          <p className="pt-2 mr-3 font-sans line-through font-semibold text-red-400">$560</p>
          <h2 className="font-sans font-bold text-3xl my-5 text-green-700">${bookingData.price}</h2>
        </div>
        <button onClick={cart} className="btn btn-accent w-full text-white mt-3">
          Add To Cart
        </button>
        <button onClick={booking} className="btn btn-outline w-full mt-3">
          Booking Now
        </button>
        <Toaster />
      </div>
    </>
  );
};

export default BookingCard;
