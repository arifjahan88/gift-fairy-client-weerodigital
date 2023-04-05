import React from "react";

const ServiceCard = ({ cardData }) => {
  const { logo, title, description } = cardData;
  return (
    <div className="lg:p-6 p-5 py-8 lg:mt-5 border-black rounded-3xl hover:shadow-xl bg-slate-50 hover:bg-blue-50 duration-500">
      <div className="flex justify-center items-center border-2 border-gray-400 rounded-full w-12 mx-auto">
        {logo}
      </div>
      <p>
        <h5 className="mb-2 text-2xl font-bold text-center text-gray-600 dark:text-white mt-2">
          {title}
        </h5>
      </p>
      <p className="mb-3 font-normal text-gray-500 text-justify">{description}</p>
    </div>
  );
};

export default ServiceCard;
