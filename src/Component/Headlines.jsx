import React, { useState } from "react";
import Data from "../API/Data";

export default function Headlines() {
  const [bullets] = useState(Data.Headliner);
  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-1 container_fluid">
      <div className=" my-5">
        <h1 className="font-bold text-xl">PRODUCT</h1>
        <ul className="lg:block flex flex-wrap">
          {bullets.Poducts.map((e, i) => {
            return (
              <li key={i} className=" my-2 mx-2 hover:underline cursor-pointer">
                {e}
              </li>
            );
          })}
        </ul>
      </div>
      <div className=" my-5">
        <h1 className="font-bold text-xl">SPORTS</h1>
        <ul className="lg:block flex flex-wrap">
          {bullets.Sports.map((e, i) => {
            return (
              <li key={i} className=" my-2 mx-2 hover:underline cursor-pointer">
                {e}
              </li>
            );
          })}
        </ul>
      </div>
      <div className=" my-5">
        <h1 className="font-bold text-xl">COLLECTION</h1>
        <ul className="lg:block flex flex-wrap">
          {bullets.Collection.map((e, i) => {
            return (
              <li key={i} className=" my-2 mx-2 hover:underline cursor-pointer">
                {e}
              </li>
            );
          })}
        </ul>
      </div>
      <div className=" my-5">
        <h1 className="font-bold text-xl">SUPPORTS</h1>
        <ul className="lg:block flex flex-wrap">
          {bullets.Support.map((e, i) => {
            return (
              <li key={i} className=" my-2 mx-2 hover:underline cursor-pointer">
                {e}
              </li>
            );
          })}
        </ul>
      </div>
      <div className=" my-5 mx-2">
        <h1 className="font-bold text-xl ">COMPANY INFO</h1>
        <ul className="lg:block flex flex-wrap">
          {bullets.Company.map((e, i) => {
            return (
              <li key={i} className=" my-2 mx-2 hover:underline cursor-pointer">
                {e}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="my-5 mx-5">
        <h1 className="font-bold text-xl">Follow</h1>
        <div className="  flex lg:block flex-wrap">
          {bullets.Follow.map((e, i) => {
            return <img key={i} src={e} alt="" className="my-2 mx-1" />;
          })}
        </div>
      </div>
    </div>
  );
}
