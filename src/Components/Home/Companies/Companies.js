import React from "react";
import img1 from "../../../Assests/company name/company-1.png";
import img2 from "../../../Assests/company name/company-2.png";
import img3 from "../../../Assests/company name/company-3.png";
import img4 from "../../../Assests/company name/company-4.png";
import img5 from "../../../Assests/company name/company-5.png";
import img6 from "../../../Assests/company name/company-6.png";

const Companies = () => {
  return (
    <div className="max-w-[1234px] mx-auto mb-20" data-aos="fade-up" data-aos-duration="1000">
      <h2 className="text-center font-bold text-3xl">Trusted by over 100+ companies</h2>
      <div className="grid lg:grid-cols-6 justify-center items-center mt-5 gap-6">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
      </div>
    </div>
  );
};

export default Companies;
