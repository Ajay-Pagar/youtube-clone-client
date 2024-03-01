import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-xl">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 mr-2 cursor-pointer"
          alt="Hamburger"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
        />
        <a href="/">
          <img
            className="h-8"
            alt="logo"
            src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-4">
        <input
          className="border border-gray-300 w-1/2 p-2 rounded-l-full"
          placeholder="Search here"
          type="text"
        />
        <button className="border border-gray-300 p-2 bg-gray-100 rounded-r-full">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://cdn-icons-png.freepik.com/256/1077/1077114.png"
        />
      </div>
    </div>
  );
};

export default Head;
