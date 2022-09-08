import React, { useState } from "react";
import Data from "../API/Data";
import Typed from "react-typed";

export default function Header() {
  const [Heady] = useState(Data.CompNav);
  const [Nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!Nav);
  };
  return (
    <div className="">
      <div className="bg-black text-white">
        <Typed
          className="text-center  flex items-center justify-center font-semibold"
          strings={[
            "FREE STANDARD SHIPPING & RETURNS | JOIN NOW",
            "Udhar Aik Jhang Hai Is Liye Band hai",
          ]}
          typeSpeed={30}
          backSpeed={30}
          loop
        />
      </div>
      {Heady.map((e, i) => {
        return (
          <div key={i} className="">
            <div className="flex items-center justify-between">
              <button onClick={handleNav} className="lg:hidden block">
                {!Nav ? e.icon1 : e.icon}
              </button>
              <div className="mx-10 flex items-center">
                <img src={e.src} alt="" className="w-12" />
              </div>
              <div className=" lg:block hidden   mx-10 py-5">
                <ul className="flex justify-between ">
                  {e.Ulies.map((ele, i) => {
                    return (
                      <li
                        key={i}
                        className="font-bold cursor-pointer text-slate-700 hover:text-gray-900 mx-4 text-sm"
                      >
                        {ele}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="lg:block hidden">
                <div className="bg-gray-300 w-40 flex rounded">
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent w-32 outline-none "
                  />
                  <div className="my-2">{e.search}</div>
                </div>
              </div>
              <div className="flex ">
                {e.icons.map((ele, i) => {
                  return (
                    <div key={i} className="mx-2 lg:block  md:hidden sm:block">
                      {ele}
                    </div>
                  );
                })}
              </div>
            </div>
            {!Nav ? (
              <div className="lg:hidden block">
                <div className="bg-gray-500 w-full   z-10 text-black duration-500 flex flex-col items-center  absolute left-0 top-0">
                  <button
                    onClick={handleNav}
                    className="block sm:ml-64 md:ml-[90%] my-3 hover:rotate-180 duration-500"
                  >
                    {!Nav ? e.icon1 : e.icon}
                  </button>
                  <img src={e.src} alt="" className="w-12 my-3" />

                  <ul className="flex flex-col items-center justify-between py-5">
                    {e.Ulies.map((ele, i) => {
                      return (
                        <li key={i} className="font-bold mx-4 py-2 text-md">
                          {ele}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="lg:hidden block">
              <div className="bg-gray-500 w-0 overflow-hidden   z-10 text-black duration-500 flex flex-col items-center  absolute left-0 top-0">
                <button
                  onClick={handleNav}
                  className="block sm:ml-64 md:ml-[90%] my-3 hover:rotate-180 duration-500"
                >
                  {!Nav ? e.icon1 : e.icon}
                </button>
                <img src={e.src} alt="" className="w-12 my-3" />

                <ul className="flex flex-col items-center justify-between py-5">
                  {e.Ulies.map((ele, i) => {
                    return (
                      <li key={i} className="font-bold mx-4 py-2 text-md">
                        {ele}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
