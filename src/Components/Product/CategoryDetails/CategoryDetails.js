import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryDataCard from "./CategoryDataCard";

const CategoryDetails = () => {
  const detailsdata = useLoaderData();

  return (
    <div className="max-w-[1234px] mx-auto">
      <h1 className="text-center text-xl my-5 font-semibold ">
        <span className="font-bold text-2xl text-orange-600">{detailsdata.length}</span> Products
        Available.
      </h1>
      <div className="grid lg:grid-cols-3 gap-5">
        {detailsdata.map((categoryData) => (
          <CategoryDataCard categoryData={categoryData} key={categoryData.id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;
