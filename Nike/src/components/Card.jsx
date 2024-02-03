import React from "react";

const Card = ({imageURL}) => {
  return (
    <div className="max-w-[45%] bg-gray-400 sm:m-4 mt-5 h-[500px] rounded-3xl shadow-2xl">
      <img
        src={imageURL}
        alt="nike-air-max-plus"
        className="object-cover h-full w-full rounded-3xl"
      />
    </div>
  );
};

export default Card;
