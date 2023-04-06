import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/giftcategories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="pt-20 max-w-[1234px] mx-auto">
      <h1 className="text-2xl my-4 font-semibold text-center">Select Your Category </h1>
      <div className="text-center">
        {categories.map((data) => (
          <Link key={data.id} to={`/product/${data.id}`}>
            <button className="border m-2 rounded-xl p-2 px-4 hover:bg-cyan-500 hover:text-white duration-500">
              {data.coursename}
            </button>
          </Link>
        ))}
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default Product;
