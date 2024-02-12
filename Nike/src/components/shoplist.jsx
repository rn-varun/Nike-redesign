import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./Cards";
import Footer from "./Footer";

const shoplist = () => {
  const [shoeInfo, setShoeInfo] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const shoes = async () => {
      try {
        const info = await axios.get("http://localhost:3000/api/categories");
        setShoeInfo(info.data);
      } catch (error) {
        console.error("API call failed");
      }
    };
    const shoeInfo = async () => {
      try {
        const data = await axios.get("http://localhost:3000/api/shoes");
        setData(data.data);
      } catch (err) {
        console.log("api call error");
      }
    };
    shoes();
    shoeInfo();
  }, []);
  return (
    <div>
      <div className="flex md:flex-row flex-col">
        <div className="lg:flex hidden flex-col rounded-sm mx-10 w-[20%] mt-16 h-[100%] p-5 shadow-sm shadow-gray-400">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold mb-2">Categories</h1>
            <ul>
              {shoeInfo.map((item, index) => (
                <li
                  className="my-3 font-medium hover:underline cursor-pointer"
                  key={index}
                >
                  {item.category}
                </li>
              ))}
            </ul>
          </div>
          
        </div>
        <div className="rounded-2xl w-full h-[100%] mx-2">
          <div className="md:hidden sticky top-0 py-3 bg-white w-full z-50">
            <p className="font-bold text-xl">Football Shoes</p>
          </div>
          <div className="flex md:flex-row flex-col justify-center items-center mb-5">
            <Cards data={data} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default shoplist;
