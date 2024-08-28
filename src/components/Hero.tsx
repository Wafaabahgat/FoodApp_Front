import React from "react";
import { FC } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <div className="mt-20">
      <div className="relative">
        <img src={assets.header_img} alt="header_img" />
        <div className="absolute top-0 left-0 lg:right-48 right-10">
          <div className="max-w-[750px] lg:py-[110px] md:py-[70px] sm:py-[90px] py-2 md:px-20 px-10">
            <div className="flex flex-col gap-0 font-bold text-white text-[16px] sm:text-xl md:gap-2 lg:gap-4 lg:text-5xl md:text-3xl">
              <h2 className="animate-slideUp">Order your</h2>
              <span className="animate-slideUp">favourite food here</span>
            </div>
            <p className="mt-2 sm:mb-6 mb-1 text-white md:text-sm lg:mt-9 md:mt-5 text-[9px] sm:text-[10px] animate-slideUp">
              In the next part we will make the back-end and admin panel of this
              food delivery website / web app. We will make the project full
              stack with the help of MongoDB, Express, React and Node JS
            </p>
            <div className="animate-slideUp">
              <Link
                to="#"
                className="px-3 py-1 bg-white border md:text-sm sm:py-2 md:px-6 rounded-3xl text-[10px]"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
