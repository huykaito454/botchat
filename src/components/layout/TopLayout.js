import React from "react";
import { NavLink } from "react-router-dom";

const TopLayout = ({ title, link = "/", visible }) => {
  return (
    <div className="top absolute top-0 h-14 p-3 w-full flex items-center justify-between">
      <h1 className="text-3xl font-semibold text-admin uppercase">{title}</h1>

      <div
        className={`flex items-center ${visible ? "visible opacity-0" : ""} `}
      >
        <NavLink to={link} className="search cursor-pointer mr-4">
          <i className="fas fa-plus text-admin text-2xl"></i>
        </NavLink>
        <div className="plus cursor-pointer">
          <i className="fas fa-search text-admin text-2xl"></i>
        </div>
      </div>
    </div>
  );
};

export default TopLayout;
