import React, { useState } from "react";
import Data from "../API/Data";

export default function Percet() {
  const [jhon] = useState(Data.Join);
  return (
    <div className="bg-yellow-300">
      <div className="grid md:grid-cols-2 grid-cols-1 container_fluid py-5">
        <div className="flex items-center justify-center py-4">
          <h1 className="text-4xl font-bold">{jhon.Jon}</h1>
        </div>
        <div className="flex items-center justify-center ">
          <button className="bg-black rounded group font-bold text-white flex items-center hover:bg-gray-700 px-10 py-5 text-xl">
            {jhon.Button}
            <div className="flex items-center justify-center group-hover:translate-x-6 duration-300 mx-2">
              {jhon.Arro}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
