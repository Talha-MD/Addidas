import React, { useState } from "react";
import Data from "../API/Data";
export default function Giphy() {
  const [Giph] = useState(Data.Giphs);
  //   console.log(school, "may data");
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mx-2 mt-24">
        {Giph.SPic.map((e, i) => {
          // console.log(e, "tester");
          return (
            <div key={i} className="">
              <div className="h-[60vh]">
                <img src={e.src} alt="" className="w-[100%] h-[100%]" />
              </div>
              <h1 className="text-md font-semibold pt-2">{e.Hg}</h1>
              <p className="pt-5">{e.Para}</p>
              <button className="hover:underline hover:text-white hover:bg-black duration-300 text-md font-bold my-10">
                {e.But}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
