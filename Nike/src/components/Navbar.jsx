import React from "react";
import { Link } from "react-router-dom";
import { links } from "../constants";

const Navbar = ({ menu }) => {
  return (
    <nav className="w-full flex items-center justify-center sticky">
      <div className="ml-4 p-2">
        <Link to={`${'/'}`}>
        <img
          src="../../src/assets/logo.png"
          alt="Logo"
          className="w-[70px] h-[70px] object-contain cursor-pointer"
        />
        </Link>
      </div>

      <div className="flex-grow m-auto flex md:gap-20 gap-6 text-gray-400 justify-center items-center">
        {links.map((link, index) => (
          <p
            className="hover:cursor-pointer hover:underline underline-offset-3"
            key={index}
          >
            {link}
          </p>
        ))}
      </div>

      <div className="justify-end ml-auto mr-4 p-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          alt=""
          className="w-[30px] h-[30px] cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
