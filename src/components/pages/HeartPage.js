import React from "react";
import { NavLink } from "react-router-dom";
import TopLayout from "../layout/TopLayout";

const HeartPage = () => {
  return (
    <>
      <TopLayout title={"Hearts"} link={"/heart"}></TopLayout>
      <div className="w-full mt-[55px] py-3">
        <NavLink
          to={"/bot"}
          className="p-2 border-b border-opacity-25 w-full border-gray-700 flex items-center justify-between cursor-pointer"
        >
          <div className="info flex flex-col">
            <span className=" font-semibold">Bot Huy</span>
            <span className="text-gray-500 text-xs">No description</span>
          </div>
          <i className="fas fa-ellipsis-v text-lg cursor-pointer"></i>
        </NavLink>
        <NavLink
          to={"/bot"}
          className="p-2 border-b border-opacity-25 w-full border-gray-700 flex items-center justify-between cursor-pointer"
        >
          <div className="info flex flex-col">
            <span className=" font-semibold">Bot Huy</span>
            <span className="text-gray-500 text-xs">No description</span>
          </div>
          <i className="fas fa-ellipsis-v text-lg cursor-pointer"></i>
        </NavLink>
        <NavLink
          to={"/bot"}
          className="p-2 border-b border-opacity-25 w-full border-gray-700 flex items-center justify-between cursor-pointer"
        >
          <div className="info flex flex-col">
            <span className=" font-semibold">Bot Huy</span>
            <span className="text-gray-500 text-xs">No description</span>
          </div>
          <i className="fas fa-ellipsis-v text-lg cursor-pointer"></i>
        </NavLink>
      </div>
    </>
  );
};

export default HeartPage;
