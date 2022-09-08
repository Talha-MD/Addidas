import React, { useState } from "react";
import Data from "../API/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default function Interested() {
  const [interested] = useState(Data.Interested);
  return (
    <div>
      <h1 className="text-4xl italic font-bold mx-2">{interested.Hilight}</h1>
      <div className=" my-5">
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
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
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {interested.IntSlider.map((e, i) => {
            return (
              <SwiperSlide key={i} className="hover:border-black border group ">
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
    </div>
  );
}

// import { useState } from "react";
// import { Tab } from "@headlessui/react";
// import Port1 from "../Assets/assets/port03.jfif";
// import Port2 from "../Assets/assets/port06.jpg";
// import Port3 from "../Assets/assets/port09.jfif";
// import Port4 from "../Assets/assets/port04.jpg";
// import Port5 from "../Assets/assets/port07.jpg";
// import Port6 from "../Assets/assets/port10.jpg";
// import Port7 from "../Assets/assets/port05.jfif";
// import Port8 from "../Assets/assets/port08.jfif";
// import Port9 from "../Assets/assets/port11.jfif";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Example() {
//   let [categories] = useState({
//     All: [
//       {
//         pic: Port1,
//         color: "bg-[#FFF0F0]",
//         para: "UI/UX",
//         foot: "My Creativity",
//       },
//       {
//         pic: Port2,
//         color: "bg-[#FFF3FC]",
//         para: "Web Design",
//         foot: "My Creativity",
//       },
//       {
//         pic: Port3,
//         color: "bg-[#FFF0F0]",
//         para: "Logo",
//         foot: "My Creativity",
//       },
//       {
//         pic: Port4,
//         color: "bg-[#E9FAFF]",
//         para: "Video",
//         foot: "My Creativity",
//       },
//       {
//         pic: Port5,
//         color: "bg-[#FFFAE9]",
//         para: "UI/UX",
//         foot: "My Creativity",
//       },
//       {
//         pic: Port6,
//         color: "bg-[#FCF4FF]",
//         para: "Vedio",
//         foot: "My Creativity",
//       },
//       {
//         pic: Port7,
//         color: "bg-[#FFF0F8]",
//         para: "UI/UX",
//         foot: "My Creativity",
//       },
//       {
//         pic: Port8,
//         color: "bg-[#FFF0F8]",
//         para: "Web Design",
//         foot: "My Creativity",
//       },
//       {
//         pic: Port9,
//         color: "bg-[#FCF4FF]",
//         para: "Logo",
//         foot: "My Creativity",
//       },
//     ],
//     Vedio: [
//       {
//         pic: Port6,
//         color: "bg-[#FCF4FF]",
//         para: "Vedio",
//         foot: "My Creativity",
//       },
//       {
//         pic: Port4,
//         color: "bg-[#E9FAFF]",
//         para: "Video",
//         foot: "My Creativity",
//       },
//     ],
//     Logo: [
//       {
//         pic: Port3,
//         color: "bg-[#FFF0F0]",
//         para: "Logo",
//         foot: "My Creativity",
//       },
//       {
//         pic: Port9,
//         color: "bg-[#FCF4FF]",
//         para: "Logo",
//         foot: "My Creativity",
//       },
//     ],
//     Web: [
//       {
//         pic: Port2,
//         color: "bg-[#FFF3FC]",
//         para: "Web Design",
//         foot: "My Creativity",
//       },
//       {
//         pic: Port8,
//         color: "bg-[#FFF0F8]",
//         para: "Web Design",
//         foot: "My Creativity",
//       },
//     ],
//     Graphic: [
//       {
//         pic: Port5,
//         color: "bg-[#FFFAE9]",
//         para: "UI/UX",
//         foot: "My Creativity",
//       },
//       {
//         pic: Port1,
//         color: "bg-[#FFF0F0]",
//         para: "UI/UX",
//         foot: "My Creativity",
//       },
//       {
//         pic: Port7,
//         color: "bg-[#FFF0F8]",
//         para: "UI/UX",
//         foot: "My Creativity",
//       },
//     ],
//   });

//   return (
//     <div className="bg-white container_flud rounded-xl py-5">
//       <Tab.Group>
//         <Tab.List className="flex flex-wrap lg:justify-end md:justify-center sm:justify-start p-1">
//           {Object.keys(categories).map((category) => (
//             <Tab
//               key={category}
//               className={({ selected }) =>
//                 classNames(
//                   "font-medium leading-5 mx-3 px-2",
//                   "ring-white ring-opacity-60 ring-offset-2",
//                   selected
//                     ? "bg-white shadow"
//                     : "text-blue-100 hover:bg-white/[0.12] hover:text-[#EC3C63]"
//                 )
//               }
//             >
//               {category}
//             </Tab>
//           ))}
//         </Tab.List>
//         <Tab.Panels className="">
//           {Object.values(categories).map((posts, idx) => (
//             <Tab.Panel key={idx}>
//               <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 px-5 my-5">
//                 {posts.map((post,i) => (
//                   <div className={`${post.color} rounded-xl`} key={i}>
//                     <div className="overflow-hidden rounded-xl mx-10 my-5">
//                       <img
//                         src={post.pic}
//                         className="rounded-xl hover:scale-110 duration-300 w-full"
//                       />
//                     </div>
//                     <p className="text-gray-400 text-sm mx-10">{post.para}</p>
//                     <p className="text-xl mx-10 pb-3">{post.foot}</p>
//                   </div>
//                 ))}
//               </div>
//             </Tab.Panel>
//           ))}
//         </Tab.Panels>
//       </Tab.Group>
//     </div>
//   );
// }
