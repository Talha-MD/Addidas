import React, { useState } from "react";
import Data from "../API/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default function Promotion() {
  const [Promo] = useState(Data.Pro);
  return (
    <div>
      <div className=" my-5">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          centeredSlides={true}
          navigation={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },

            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },

            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            800: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {Promo.PrSlider.map((e, i) => {
            return (
              <SwiperSlide key={i} className="">
                <div className="flex flex-col relative items-start justify-start">
                  <img src={e.src} alt="" />
                  <i className="absolute left-[90%] my-5">{e.Hrt}</i>
                  <h1 className="mx-2 text-[13px] my-2 font-bold">{e.Des}</h1>
                  <h1 className="mx-2 text-gray-400 text-sm text-start">
                    {e.Ds1}
                  </h1>
                  <button className="hover:underline hover:text-white hover:bg-black duration-300 text-md font-bold my-10">
                    {e.But}
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
