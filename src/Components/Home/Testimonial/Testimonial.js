import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";
import CardTestimonial from "./CardTestimonial";

const Testimonial = () => {
  const testimonialData = [
    {
      id: "01",
      color: "green",
      quoteText:
        "Working with our team has been an incredible experience. Their expertise and attention to detail have helped us achieve our goals and exceed our expectations. We look forward to continuing our partnership for years to come.",
      quoteAuthor: "Md Arif Jahan",
      authorTitle: "Founder at RA",
    },

    {
      id: "02",
      color: "pink",
      quoteText:
        "Our experience with Gift Fairy has been nothing short of exceptional. Their team has gone above and beyond to understand our needs and deliver customized solutions that have helped us achieve our goals. I highly recommend them to any organization looking to take their business to the next level.",
      quoteAuthor: "John Smith",
      authorTitle: "Co-Founder at TechSol",
    },

    {
      id: "03",
      color: "blue",
      quoteText:
        "I can't say enough good things about the team at Gift Fairy. They have exceeded our expectations at every turn, delivering exceptional results and exceptional service. We're grateful to have them as a partner.",
      quoteAuthor: "John Doe",
      authorTitle: "Founder at LegalTrust",
    },
  ];
  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="max-w-[1234px] mx-auto mb-10">
      <Swiper
        loop="true"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardTestimonial
            color={testimonialData[0].color}
            quoteText={testimonialData[0].quoteText}
            quoteAuthor={testimonialData[0].quoteAuthor}
            authorTitle={testimonialData[0].authorTitle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTestimonial
            color={testimonialData[1].color}
            quoteText={testimonialData[1].quoteText}
            quoteAuthor={testimonialData[1].quoteAuthor}
            authorTitle={testimonialData[1].authorTitle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTestimonial
            color={testimonialData[2].color}
            quoteText={testimonialData[2].quoteText}
            quoteAuthor={testimonialData[2].quoteAuthor}
            authorTitle={testimonialData[2].authorTitle}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
