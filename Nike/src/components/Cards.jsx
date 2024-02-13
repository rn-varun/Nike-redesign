const Cards = ({ data }) => {
  console.log(data);

  return (
    <div className="">
      <div className="flex lg:flex-row flex-col gap-x-10 flex-wrap gap-y-5 mt-5">
        {data.map((shoe, index) => (
          <div className="flex flex-col hover:cursor-pointer gap-y-[0.15rem]">
            <img
              key={index}
              className="object-cover w-[25rem] h-[25rem] rounded-2xl"
              src={shoe.url}
              alt="shoe_img"
            />
            <p className="mt-2 font-bold">{shoe.name}</p>
            <p className="font-bold">MRP: ₹{shoe.price}</p>
            <p className="font-medium text-gray-400">{shoe.category.toUpperCase()} SHOES</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
