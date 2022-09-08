import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Data from "../API/Data";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider2() {
  const [Run] = useState(Data.Slider2);
  const [Bar] = useState(Data.Headbar);

  return (
    <>
      <div className="flex justify-between mt-10 py-5 border">
        <ul className="md:flex hidden">
          {Bar.hilight.map((e, i) => {
            return (
              <div key={i} className="flex flex-col items-center">
                <li className="mx-3 py-3 group font-bold">{e}</li>
                <hr className="h-[3px] w-[80%]  bg-black" />
              </div>
            );
          })}
        </ul>
        <button className="hover:underline   hover:text-white hover:bg-black duration-300 font-bold ">
          SHOP NOW
        </button>
      </div>
      <div className="">
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          loop={true}
          centeredSlides={true}
          speed={2000}
          navigation={true}
          breakpoints= {{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },

            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            800: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {Run.map((e, i) => {
            return (
              <SwiperSlide
                key={i}
                className="hover:border-black hover:border group "
              >
                <div className="flex flex-col relative items-start justify-start">
                  <img src={e.src} alt="" />
                  <i className="absolute left-[90%] my-5">{e.Hrt}</i>
                  <p className="absolute text-start top-[64%] group-hover:top-[60%] duration-300 bg-white px-2 mx-2">
                    {e.Rs}
                  </p>
                  <h1 className="mx-2 text-sm">{e.Des}</h1>
                  <h1 className="mx-2 text-gray-400 text-sm">{e.Ds1}</h1>
                  <p className="mx-2 text-sm ">{e.status}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
