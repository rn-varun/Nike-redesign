import React from "react";

const Card = ({imageURL, name, price}) => {
  return (
    <div className="md:max-w-[45%] max-w-full bg-gray-400 sm:m-4 m-1 mt-10 h-[500px] rounded-3xl shadow-lg hover:cursor-pointer">
      <img
        src={imageURL}
        alt="nike-air-max-plus"
        className="object-cover h-full w-full rounded-3xl"
      />
      <p className="font-bold mt-2 flex justify-start items-center">{name}</p>
      <p className="font-bold">{price}</p>
      <p className="text-gray-400">Men's Shoe</p>
    </div>
  );
};

export default Card;
