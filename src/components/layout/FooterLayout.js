import React from "react";
import { NavLink } from "react-router-dom";

const FooterLayout = () => {
  return (
    <div className="bar absolute bottom-0 h-11 border-t border-opacity-25 w-full border-gray-700 flex items-center justify-between px-8">
      <NavLink to={"/"} className="bar-item w-7 h-7 cursor-pointer">
        <img
          src="https://img.icons8.com/officel/80/000000/hearts.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </NavLink>
      <NavLink to={"/characters"} className="bar-item w-7 h-7 cursor-pointer">
        <img
          src="https://img.icons8.com/officel/80/000000/user.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </NavLink>
      <NavLink to={"/talk"} className="bar-item w-7 h-7 cursor-pointer">
        <img
          src="https://img.icons8.com/officel/80/000000/chat.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </NavLink>
      <NavLink to={"/setting"} className="bar-item w-7 h-7 cursor-pointer">
        <img
          src="https://img.icons8.com/officel/80/000000/settings--v1.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </NavLink>
    </div>
  );
};

export default FooterLayout;
