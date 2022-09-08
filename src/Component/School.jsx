import React, { useState } from "react";
import Data from "../API/Data";
export default function School() {
  const [school] = useState(Data.School);
  //   console.log(school, "may data");
  return (
    <>
      <div className="">
        <h1 className="text-black text-4xl font-bold py-10 mx-3">
          {school.heading}
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mx-2">
        {school.SPic.map((e, i) => {
          // console.log(e, "tester");
          return <div key={i} className="">
            <img src={e.src} alt="" />
            <h1 className="text-xl font-bold pt-2">{e.Hg}</h1>
            <p className="pt-5">{e.Para}</p>
            <button className="hover:underline hover:text-white hover:bg-black duration-300 font-bold my-10">{e.But}</button>
          </div>;
        })}
      </div>
    </>
  );
}
