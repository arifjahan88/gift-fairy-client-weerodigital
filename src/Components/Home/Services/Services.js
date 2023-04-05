import React from "react";
import { TiTickOutline } from "react-icons/ti";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const Service_Data = [
    {
      id: 1,
      logo: <TiTickOutline className="w-10 h-auto text-gray-600"></TiTickOutline>,
      title: "POPULAR GIFTS",
      description:
        "Popular gifts are items that are highly sought-after and are often given as gifts for various occasions such as birthdays, anniversaries, weddings, or holidays like Christmas, Valentine's Day, or Mother's Day. These gifts can range from practical and useful items to luxurious and indulgent treats.",
    },
    {
      id: 2,
      logo: <TiTickOutline className="w-10 h-auto text-gray-600"></TiTickOutline>,
      title: "PERSONALIZED PRODUCTS",
      description:
        "These products can be personalized with the recipient's name, initials, or even a custom message. Personalized products are often given as gifts for special occasions like birthdays, weddings, or holidays, but they can also be used for personal use.",
    },
    {
      id: 3,
      logo: <TiTickOutline className="w-10 h-auto text-gray-600"></TiTickOutline>,
      title: "NO MINIMUM ORDER",
      description:
        "This means that customers can place an order for any quantity of products they desire, without a minimum quantity requirement. This policy is often beneficial for small businesses or individuals who do not need to order large quantities of products at once.",
    },
  ];
  return (
    <div>
      <div className="lg:p-8 lg:mt-24 mt-6 max-w-[1334px] mx-auto">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h2 className="lg:text-6xl font-bold text-center text-4xl uppercase">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <div className="w-1/3 mx-auto border mt-5 border-slate-500 opacity-50"></div>
        </div>

        <div
          data-aos="flip-up"
          data-aos-duration="1500"
          className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mx-auto mt-10 fix_Width"
        >
          {Service_Data.map((cardData) => (
            <ServiceCard cardData={cardData} key={cardData.id}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
