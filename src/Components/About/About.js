import React from "react";
import image from "../../Assests/about-img.png";
import { BsRocket, BsFillTruckFrontFill } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";

const About = () => {
  return (
    <div className="pt-20 max-w-[1234px] mx-auto">
      <div>
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="opacity-50">Know About Us More</p>
      </div>
      <div className="my-10">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <p className="mb-5 text-justify">
              At GIFT FAIRY, we understand the importance of trust when it comes to online shopping.
              That's why we prioritize security and privacy to protect your personal information and
              ensure that your transactions are safe and secure. <br /> <br />
              Our wide range of products is carefully curated to cater to all your needs, whether
              you're looking for the latest tech gadgets, fashionable clothing, or home decor. We
              work with trusted suppliers to bring you high-quality products at affordable prices,
              so you can shop with confidence.
            </p>
            <div className="flex items-center">
              <BsRocket className="text-4xl mr-3 opacity-20" />
              <div className="py-3">
                <p className="font-sans font-bold text-xl opacity-75">FAST DELIVERY</p>
                <p className="opacity-40">Get it in a flash with our speedy delivery.</p>
              </div>
            </div>
            <div className="flex items-center">
              <BsFillTruckFrontFill className="text-4xl mr-3 opacity-20" />
              <div className="py-3">
                <p className="font-sans font-bold text-xl opacity-75">SECURED SERVICE</p>
                <p className="opacity-40">Your security is our top priority.</p>
              </div>
            </div>
            <div className="flex items-center">
              <RiSecurePaymentFill className="text-4xl mr-3 opacity-20" />
              <div className="py-3">
                <p className="font-sans font-bold text-xl opacity-75">WORLDWIDE SHIPPING</p>
                <p className="opacity-40">Bringing the world to your doorstep.</p>
              </div>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
