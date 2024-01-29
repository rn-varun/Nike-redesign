import React from "react";
import { statistics } from "../constants/index";
import { useState } from "react";
import Card from "./Card";


const Home = () => {

    const [surprise, setSurprise] = useState('Click here for a surprise! 🎁');

  return (
    <>
    <section className="flex md:flex-row flex-col sm:p-6 p-4 m-6 rounded-lg bg-gray-100 shadow-lg">
      <div className="">
        <p onClick={()=>{setSurprise('SIKE! BUY SOME SHOES')}} className=" text-blue-400 font-bold mt-5 stroke-slate-600 cursor-pointer">
            {surprise}
        </p>

        <h1 className=" leading-[6rem] sm:mt-16 mt-8 text-8xl font-bold">
            The Season's Fresh Fit<br/>
        </h1>
        <p className="font-semibold mt-10">Discover stylish Nike arrivals, quality, comfort <br/> and innovation for you sporty life.</p>
        <button className="flex justify-center items-center mt-12 bg-blue-400 rounded-3xl p-4">
            Shop Now
            <img src="https://static-00.iconduck.com/assets.00/arrow-circle-right-icon-2048x2048-3qikwvvj.png" alt="" className="ml-2 w-[20px]"/>
        </button>
        <div className="flex gap-9 mt-20 justify-start items-center">
            {statistics.map((stat, index) => (
                <div key={index}>
                    <p className="text-5xl font-extrabold">{stat.value}</p>
                    <p className="text-xl font-medium">{stat.label}</p>
                </div>
            ))}
        </div>
      </div>
      <img
        src="https://pngimg.com/uploads/football_boots/football_boots_PNG37.png"
        alt="nike-new-release"
        className="md:w-[50%] w-[100%] md:h-[50%] h-[100%] z-[5]"
      />

    </section>
    <div className="flex lg:flex-row flex-col justify-center items-center">
        <Card imageURL={'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c3685030-2849-4392-bc74-1ff7fe09caf2/mercurial-vapor-15-elite-low-top-football-boot-9Mbrnv.png'} title={'Nike Mercurial Vapor'}/>
        <Card imageURL={'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/01a9c460-c78f-4914-bfb8-d28dcd3dc2d9/mercurial-superfly-9-club-multi-ground-high-top-football-boot-PwHVpF.png'} title={'Nike Mercurial Superfly'}/>
    </div>
    </>
  );
};

export default Home;
