import React from "react";

const PopularCard = ({ data }) => {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl border p-3 hover:scale-105 duration-500">
        <img className="w-44 h-full rounded-2xl" src={data.image} alt="" />

        <div className="card-body border-l-2">
          <h2 className="card-title font-bold">{data.name}</h2>
          <small>{data.description}</small>
          <p className="text-info font-semibold">{data.price}</p>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
