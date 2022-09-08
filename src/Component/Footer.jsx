import React, { useState } from "react";
import Data from "../API/Data";

export default function Footer() {
  const [Foot] = useState(Data.Footer);
  return (
    <div className="bg-[#363738]">
      <div>
        <ul className="md:flex block py-10 items-center md:justify-center justify-start">
        {Foot.foot.map((e, i) => {
          return <div key={i}>
            <li className="px-3 border-r text-gray-300 hover:text-blue-600 hover:underline duration-300 cursor-pointer">{e}</li>
          </div>;
        })}
        </ul>
      </div>
      <div className="text-gray-300 md:mx-40 mx-10">
        <p className="text-sm">{Foot.copy}</p>
      </div>
    </div>
  );
}
