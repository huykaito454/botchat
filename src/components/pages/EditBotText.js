import React from "react";
import { NavLink } from "react-router-dom";
import TopLayout from "../layout/TopLayout";

const EditBotText = () => {
  return (
    <>
      <TopLayout title={"Hearts"} link={"/heart"}></TopLayout>
      <div className="w-full mt-[55px] py-3 flex flex-col items-end justify-end">
        <div className="p-2 w-full flex items-end justify-between cursor-pointer">
          <label htmlFor="" className=" font-semibold mr-2">
            Trigger words :
          </label>
          <input
            type="text"
            className=" border-b border-opacity-25 border-gray-700 outline-0 flex-1 shrink-0"
          />
        </div>
        <div className="p-2 w-full flex items-end justify-between cursor-pointer">
          <label htmlFor="" className=" font-semibold mr-2">
            Reply :
          </label>
          <input
            type="text"
            className=" border-b border-opacity-25 border-gray-700 outline-0 flex-1 shrink-0"
          />
        </div>
        <NavLink
          to={"/bot"}
          className="p-2 flex items-end justify-between cursor-pointer"
        >
          <button className="py-1 px-4 rounded-sm bg-admin text-white">
            ADD
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default EditBotText;
