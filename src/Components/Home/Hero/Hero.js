import React from "react";
import { Link } from "react-router-dom";
import image from "../../../Assests/heroImage.png";

const Hero = () => {
  return (
    <div>
      <div>
        <img className="-translate-y-24 -z-30 w-full opacity-80" src={image} alt="" />
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        className="text-center lg:text-right absolute lg:top-64 lg:right-52"
      >
        <h2 className="text-2xl">Introducing Most giftable Item on</h2>
        <h1 className="lg:text-8xl font-extrabold">GIFT FAIRY</h1>
        <p className="text-3xl">
          Shop the Perfect Gift for Every Occasion <br />
          Find Unique and Thoughtful Presents on Our Website
        </p>
        <Link>
          <button className="btn btn-outline mt-3">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
