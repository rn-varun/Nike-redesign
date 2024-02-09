import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./Cards";

const shoplist = () => {
  const [shoeInfo, setShoeInfo] = useState([]);

  useEffect(() => {
    const shoes = async () => {
      try {
        const data = await axios.get("http://localhost:3000/api/shoes");
        setShoeInfo(data.data);
      } catch (error) {
        console.error("API call failed");
      }
    };
    shoes();
  }, []);
  console.log(shoeInfo);

  return (
    <div className="flex md:flex-row flex-col">
      <div className="rounded-sm mx-10 w-[15%] mt-16 h-[100%] p-5 shadow-sm shadow-gray-400">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-2">Categories</h1>
          <ul>
            {shoeInfo.map((item, index) => (
              <p className="my-3 font-medium hover:underline cursor-pointer" key={index}>
                {item.category}
              </p>
            ))}
          </ul>
          <h1 className="text-2xl font-bold mb-2 mt-2">Gender</h1>
        </div>
      </div>
      <div className="rounded-2xl w-full h-[100%] mx-2">
        <div className="flex flex-wrap md:flex-row flex-col">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default shoplist;
