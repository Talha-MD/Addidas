import React, { useState } from "react";
import Data from "../API/Data";
import Slider2 from "./Slider2";


export default function Popular() {
  const [popular] = useState(Data.Popular);
  return (
    <>
      <h1 className="text-center italic text-4xl font-bold">
        {popular.heading}
      </h1>
      <div className="md:block hidden">
        <ul className="flex py-4 justify-center">
          {popular.title.map((ele, i) => {
            return (
              <li key={i} className="mx-2 border px-2 py-2 cursor-pointer">
                {ele}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mx-3">
        {popular.PP.map((e, i) => {
          return (
            <div key={i} className="flex flex-col justify-center items-center">
              <img src={e.src} alt=""/>
              <button className="hover:underline   hover:text-white hover:bg-black duration-300 font-bold ">
                {e.Butt}
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <Slider2/>
      </div>
    </>
  );
}
