import React from "react";
import logo from "../../Assests/nav-logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-800 p-20 mt-5">
      <div className="text-center text-white">
        <img className="w-56 mx-auto" src={logo} alt="" />
        <h2 className="font-semibold">
          Office 41, Dhanmondi 32, Dhaka, Bangladesh <br />
          Arif Jahan of Bangladesh Privacy Ploicy | Terms of use
        </h2>
      </div>
    </div>
  );
};

export default Footer;
