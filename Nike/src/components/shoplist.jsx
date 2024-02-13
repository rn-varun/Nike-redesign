import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import Footer from "./Footer";

const shoplist = () => {
  const [shoeInfo, setShoeInfo] = useState([]);
  const [data, setData] = useState([]);
  const { categoryName } = useParams();

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
        const data = await axios.get(
          `http://localhost:3000/api/${categoryName}`
        );
        setData(data.data);
      } catch (err) {
        console.log("api call error");
      }
    };
    shoes();
    shoeInfo();
  }, [data]);

  return (
    <div>
      <div className="flex md:flex-row flex-col">
        <div className="lg:flex hidden flex-col rounded-sm mx-10 w-[20%] mt-16 h-[100%] p-5 sticky top-10">
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold mb-2">Categories</h1>
            <ul>
              {shoeInfo.map((item, index) => (
                <li
                  className="my-3 font-medium hover:underline cursor-pointer"
                  key={index}
                >
                  <Link to={`/buy/${item.category.toLowerCase()}`}>
                  {item.category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col mt-10">
            <h1 className="text-2xl font-semibold mb-2">Shop by price</h1>
            <div className="flex flex-col gap-y-3 font-medium">
              <label className="flex gap-x-2">
                <input type="checkbox" />
                ₹2,999 - ₹5,999
              </label>
              <label className="flex gap-x-2">
                <input type="checkbox" />
                ₹6,000 - ₹8,999
              </label>
              <label className="flex gap-x-2">
                <input type="checkbox" />
                ₹9,000 - ₹12,999
              </label>
            </div>
          </div>
        </div>

        <div className="rounded-2xl w-full h-[100%] mx-2">
          <div className="flex justify-center items-center md:hidden sticky top-0 py-3 bg-white w-full z-50">
            <p className="font-bold text-xl">{categoryName.toUpperCase()}</p>
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
