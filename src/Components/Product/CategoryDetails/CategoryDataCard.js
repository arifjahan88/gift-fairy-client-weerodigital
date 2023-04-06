import React from "react";
import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const CategoryDataCard = ({ categoryData }) => {
  return (
    <div className="border m-2 p-5 rounded-2xl hover:bg-amber-50 duration-500">
      <img className="rounded-2xl opacity-90" src={categoryData.image} alt="Image_Box" />
      <h2 className="font-semibold mt-4 text-2xl">{categoryData.title}</h2>
      <div className="flex items-center">
        <div className="flex mr-2">
          <TiStarFullOutline className="text-amber-400" />
          <TiStarFullOutline className="text-amber-400" />
          <TiStarFullOutline className="text-amber-400" />
          <TiStarFullOutline className="text-amber-400" />
          <TiStarHalfOutline className="text-amber-400" />
        </div>
        <p>( {categoryData.rating.number} )</p>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <small>Price</small>
          <p className="font-bold">${categoryData.price}</p>
        </div>
        <Link to={`/product/booking/${categoryData.id}`}>
          <button className="border m-2 rounded-xl p-2 px-4 hover:bg-green-500 hover:text-white duration-500">
            Booking
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryDataCard;
