import React from "react";
import Card from "./Card";
import { images } from "../constants";

const Airmax = () => (
  <>
    <div className="flex justify-center items-center flex-col mt-10">
      <p className="font-mono sm:mt-5 mt-0">Arriving Feb 26th</p>
      <h1 className="text-6xl font-extrabold m-2 text-center">NIKE AIR MAX DN</h1>
      <p className="font-mono sm:p-0 p-3 text-center">
        Welcome to the next generation of Air Technology
      </p>
      <button className=" rounded-3xl bg-white font-semibold p-4 my-7 shadow-md shadow-blue-300">
        Get Notified
      </button>
    </div>
    <div className="flex md:flex-row flex-col flex-wrap justify-center items-center gap-y-16">
      {images.map((img, index) => (
        <Card
          key={index}
          imageURL={img.img}
          name={img.name}
          price={img.price}
        />
      ))}
    </div>
  </>
);

export default Airmax;
