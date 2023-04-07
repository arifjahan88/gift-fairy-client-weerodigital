import React from "react";
import { Link } from "react-router-dom";
import image from "../../../Assests/heroImage.png";

const Hero = () => {
  return (
    <div>
      <div>
        <img className="lg:-translate-y-24 -z-30 w-full opacity-80" src={image} alt="" />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="text-center lg:text-right lg:absolute lg:top-64 lg:right-52 top-10"
      >
        <h2 className="lg:text-2xl text-xl">Introducing Most giftable Item on</h2>
        <h1 className="lg:text-8xl text-2xl font-extrabold">GIFT FAIRY</h1>
        <p className="lg:text-3xl text-sm">
          Shop the Perfect Gift for Every Occasion <br />
          Find Unique and Thoughtful Presents on Our Website
        </p>
        <Link to="/product">
          <button className="btn btn-outline mt-3">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
