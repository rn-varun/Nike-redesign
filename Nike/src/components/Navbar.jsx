import React from "react";

const Navbar = ({ menu }) => {
  return (
    <nav className="w-full flex items-center justify-center relative">
      <div className="ml-4 p-2">
        <img
          src="https://pngfre.com/wp-content/uploads/nike-logo-7-1024x1024.png"
          alt=""
          className=" w-[70px] h-[70px] object-contain cursor-pointer"
        />
      </div>

      <div className="flex-grow m-auto flex md:gap-20 gap-6 text-gray-400 justify-center items-center">
        <a href="https://www.nike.com/in/men">Men</a>
        <a href="">Women</a>
        <a href="">Kids</a>
        <a href="">Sale</a>
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
