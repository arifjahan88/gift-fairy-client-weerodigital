import React from "react";
import QuoteIcon from "../../../Assests/quote.svg";
import PinkQuoteIcon from "../../../Assests/pink_quote.svg";
import GreenQuoteIcon from "../../../Assests/green_quote.svg";
import GreenStar from "../../../Assests/big_green_star.svg";
import BlueStar from "../../../Assests/big_blue_star.svg";
import PinkStar from "../../../Assests/big_pink_star.svg";

const CardTestimonial = ({ color, quoteText, quoteAuthor, authorTitle }) => {
  let quote_icon_color;
  let star_icon_color;

  if (color === "green") {
    quote_icon_color = GreenQuoteIcon;
    star_icon_color = GreenStar;
  } else if (color === "pink") {
    quote_icon_color = PinkQuoteIcon;
    star_icon_color = PinkStar;
  } else {
    quote_icon_color = QuoteIcon;
    star_icon_color = BlueStar;
  }
  return (
    <div>
      <div className="py-[100px]">
        <div className="lg:flex items-start lg:my-20">
          <img src={quote_icon_color} className="w-[200px]" alt="" />

          <div className="relative lg:pl-12 px-4">
            <img
              className="absolute -top-20 right-5 -z-10 rotate-[25deg] max-w-[324px] opacity-10"
              src={star_icon_color}
              alt=""
            />
            <p className="lg:text-5xl text-2xl font-sans">“{quoteText}”</p>
            <p className="text-5xl font-bold my-4 mt-10">{quoteAuthor}</p>
            <p className="text-2xl font-semibold">{authorTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTestimonial;
