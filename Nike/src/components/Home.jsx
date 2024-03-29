import React from "react";
import { statistics } from "../constants/index";
import { useState } from "react";
import Airmax from "./Airmax.jsx";
import Bra from "./Bra.jsx";
import Footer from "./Footer.jsx";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const Home = () => {
  const [bigShoe, setBigShoe] = useState(
    "https://pngimg.com/uploads/football_boots/football_boots_PNG37.png"
  );

  return (
    <div>
      <section className="flex lg:flex-row flex-col md:p-8 p-3 sm:mx-8 mx-2 rounded-lg bg-gray-100 shadow-blue-300 shadow-xl">
        <div>
          <h1 className="sm:leading-[6rem] leading-[4rem] sm:mt-12 mt-8 sm:pl-0 pl-4 sm:text-8xl text-6xl font-bold lg:text-left text-center">
            The Season's <br />
            Fresh Fit
          </h1>
          <p className="font-semibold sm:mt-10 mt-8 sm:pl-0 pl-4 lg:text-left text-center">
            Discover stylish arrivals, quality, comfort <br /> and innovation
            for you sporty life.
          </p>
          <div className="flex lg:justify-start justify-center">
            <Link to={'/buy/football'}>
            <button className="flex pl-4 justify-center items-center sm:mt-12 mt-10 bg-blue-400 rounded-3xl p-4">
              Shop Now
              <img
                src="https://static-00.iconduck.com/assets.00/arrow-circle-right-icon-2048x2048-3qikwvvj.png"
                alt=""
                className="ml-2 w-[20px]"
              />
            </button>
            </Link>
          </div>

          <div className="flex flex-row lg:justify-start justify-center gap-9 sm:mt-20 mt-10 lg:text-left text-center">
            {statistics.map((stat, index) => (
              <div key={index}>
                <p className="text-3xl font-extrabold text-center">
                  {stat.value}
                </p>
                <p className="text-xl font-medium text-center">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <img
          src={bigShoe}
          alt="nike-new-release"
          className="lg:w-[50%] w-[100%] lg:h-[50%] h-[16%] z-[5] m-auto"
        />
      </section>
      <Airmax />
      <Bra />
      <Footer />
    </div>
  );
};

export default Home;
