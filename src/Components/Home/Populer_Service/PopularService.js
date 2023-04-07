import React from "react";
import PopularCard from "./PopularCard";
import giftBox from "../../../Assests/giftbox";
import { Link } from "react-router-dom";

const PopularService = () => {
  const GiftData = [
    {
      name: "Personalized gifts",
      image: giftBox,
      description:
        "A gift that is customized specifically for the recipient, such as a personalized photo album or a monogrammed mug.",
      price: "Price : 20$",
    },
    {
      name: "Tech gadgets",
      image: giftBox,
      description:
        "For the tech-savvy person in your life, consider gifting them the latest gadget, such as a smartwatch, noise-cancelling headphones or a virtual reality headset.",
      price: "Price : 20$",
    },
    {
      name: "Subscription boxes",
      image: giftBox,
      description:
        "Subscription boxes are a fun and unique way to gift someone a curated collection of items based on their interests. ",
      price: "Price : 20$",
    },
    {
      name: "Home decor",
      image: giftBox,
      description:
        "Home decor items like decorative throw pillows, scented candles, or a stylish picture frame can add a cozy and personal touch to any living space.",
      price: "Price : 20$",
    },
    {
      name: "Experience gifts",
      image: giftBox,
      description:
        "For the person who has everything, consider gifting them an experience they'll never forget. This could be anything from a cooking class or wine tasting to a hot air balloon ride.",
      price: "Price : 20$",
    },
    {
      name: "Jewelry",
      image: giftBox,
      description:
        " A classic gift option, jewelry can be simple and elegant or bold and statement-making. Consider gifting a necklace, bracelet, or pair of earrings that suits the recipient's style.",
      price: "Price : 20$",
    },
  ];
  return (
    <div>
      <div className="text-center mt-10">
        <h1 data-aos="fade-up" data-aos-duration="1000" className="text-5xl font-semibold">
          Here discover our populer <br />
          Services
        </h1>
        <p data-aos="fade-up" data-aos-duration="1500" className="lg:w-1/2 mx-auto my-5">
          Some popular gift items may include technology gadgets, home decor, personalized gifts,
          subscription boxes, jewelry, books, food and drink, wellness gifts, outdoor gear, and
          experience gifts. These gifts are often chosen based.
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="grid lg:grid-cols-2 gap-10 my-7 max-w-[1234px] mx-auto"
      >
        {GiftData.map((data, index) => (
          <PopularCard data={data} key={index}></PopularCard>
        ))}
      </div>
      <div className="text-center">
        <Link to="/product">
          <button type="button" className="btn btn-info text-white">
            See More Gifts
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularService;
