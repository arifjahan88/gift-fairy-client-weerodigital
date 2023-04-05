import React from "react";
import { Link } from "react-router-dom";

const ContactPart = () => {
  return (
    <div className="bg-[#1371B9] py-14 lg:my-[100px] my-10">
      <div className="lg:flex justify-between max-w-[1334px] mx-auto">
        <p
          data-aos="fade-right"
          data-aos-duration="1000"
          className="lg:text-5xl font-semibold text-white text-center"
        >
          If you want to{" "}
          <span className="hover:text-white text-yellow-500 duration-500">learn more </span>
          about us, <br />
          get in touch with us.
        </p>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="flex items-center justify-center"
        >
          <Link to="">
            <button className="lg:px-7 lg:py-3 px-3 py-1 bg-yellow-500 hover:bg-green-600 hover:text-white duration-500 rounded-xl lg:text-xl uppercase font-bold">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPart;
