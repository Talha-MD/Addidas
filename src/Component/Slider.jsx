import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Data from "../API/Data";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
  const [sliderimg] = useState(Data.Hero[0].Images);
  // console.log(sliderimg, "test image");

  return (
    <>
      <Swiper
        loop={true}
        centeredSlides={true}
        speed={2000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {sliderimg.map((e, i) => {
          console.log(e, i, "test data by index");
          return (
            <SwiperSlide key={i} className=" ">
              <div className="w-full h-screen">
                <div
                  style={{
                    backgroundImage: `url(${e})`,
                    height: "100vh",
                    width: "100vw",
                    backgroundSize: "100% 100%",
                  }}
                ></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
