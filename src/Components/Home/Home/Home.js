import React from "react";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import PopularService from "../Populer_Service/PopularService";
import ContactPart from "../ContactPart/ContactPart";
import Companies from "../Companies/Companies";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <PopularService />
      <ContactPart />
      <Testimonial />
      <Companies />
    </>
  );
};

export default Home;
