import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import img1 from "../assets/dashboard/img1.jpg";
import img2 from "../assets/dashboard/img2.jpg";
import img3 from "../assets/dashboard/img3.jpg";
import img4 from "../assets/dashboard/img1.jpg";

import { VscCallIncoming } from "react-icons/vsc";
import SliderVector from "../assets/dashboard/SliderVector.svg";
import { FaArrowDownLong } from "react-icons/fa6";

const LandingSlider = () => {
  const swiperImages = [img1, img2, img3, img4];
  const handleScrollUp = () => {
    window.scrollBy({
      top: window.innerHeight * 0.9,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full h-auto overflow-hidden rounded-lg mt-14">
        <div className="absolute flex justify-between bg-black/10 items-center top-0 left-0 w-full h-full z-10">
          <div
            className="flex flex-col xl:gap-3 lg:w-2/3 lg:p-24 md:p-10 p-4 h-full 
                  lg:items-start lg:text-left 
                  items-center text-center justify-center"
          >
            <p className="roboto text-white font-roboto xl:text-6xl lg:text-4xl md:text-3xl text-2xl font-medium mb-2 mt-8 lg:mt-0">
              Build Your Future with Rich Helping
            </p>
            <hr className="lg:w-1/2 border-white my-3 mt-5" />
            <p className="lg:w-2/3 text-white text-sm font-light text-justify lg:text-left ">
              Join a sustainable business model that combines health, herbal
              products, and financial growth. Earn through product sales, team
              building, rewards, and lifetime bonuses. Discover income
              opportunities, exciting incentives, and a path towards long-term
              success.
            </p>
            {/* <button className="lg:w-1/4 bg-green-600 whitespace-nowrap lg:mt-2 mt-3 text-sm text-white px-4 py-2 rounded-md xl:mt-5">
              Shop Now
            </button> */}
          </div>

          <div className="h-full lg:flex items-end justify-end gap-2 w-1/3 hidden">
            <div className="relative flex items-center gap-4 bg-white rounded-tl-2xl p-4">
              <div className="text-white cursor-pointer bg-green-600 rounded-full text-xl xl:p-3 p-2 hover:rotate-45 transition-all duration-500">
                <VscCallIncoming />
              </div>
              <div className="flex flex-col justify-between gap-1">
                <p className="text-gray-400 xl:text-sm text-xs">
                  Call Us when you need help
                </p>
                <p className="text-black xl:text-base text-sm">
                  Support: +91 90300 06069
                </p>
              </div>
              <img
                src={SliderVector}
                alt="SliderVector"
                className="absolute right-0 -bottom-6 xl:-translate-y-[93%] -translate-y-[88%] translate-x-[2%]"
              />
            </div>
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          loop={true}
          speed={2000}
          modules={[Autoplay]}
          className="w-full lg:h-[70vh] sm:h-[70vh] h-[50vh] "
        >
          {swiperImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                className="w-full h-full object-cover "
                alt={`Slide ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex items-center justify-center mt-2">
        <button
          onClick={handleScrollUp}
          className="border border-gray-400 flex gap-3 items-center hover:bg-bg-color hover:text-white transition-all duration-300 text-sm px-8 md:py-3 py-2 rounded-full"
        >
          <p className="animate-bounce">
            <FaArrowDownLong />
          </p>
          Scroll Now
        </button>
      </div>
    </div>
  );
};

export default LandingSlider;
