import React from "react";
import { NavLink } from "react-router-dom";
import TopLayout from "../layout/TopLayout";

const BotPage = () => {
  return (
    <>
      <TopLayout title={"Hearts"} link={"/heart"}></TopLayout>
      <div className="w-full mt-[55px] py-3 flex flex-col items-end justify-end">
        <div className="p-2 w-full flex items-start justify-between cursor-pointer flex-col">
          <label htmlFor="" className=" font-semibold">
            When non of the conditions are satisfied
          </label>
          <input
            type="text"
            className=" border-b border-opacity-25 border-gray-700 outline-0 w-full"
            placeholder="Type text..."
          />
        </div>
        <div className="flex items-center justify-between px-2 py-1 w-full bg-footer ">
          <span className=" font-semibold">Interaction list</span>
          <NavLink to={"/edit-bot"}>
            <i className="fas fa-plus cursor-pointer"></i>
          </NavLink>
        </div>
        <div className="p-2 w-full flex items-start justify-between cursor-pointer flex-col">
          <NavLink
            to={"/edit-bot"}
            className="border-b border-opacity-25 w-full border-gray-700 flex items-center justify-between cursor-pointer mb-2"
          >
            <div className="info flex flex-col">
              <span className=" font-semibold text-admin text-base">
                Bạn tên gì ?
              </span>
              <span className="text-gray-500 text-xs">Tôi tên Huy</span>
            </div>
            <div>
              <i className="far fa-copy text-xl cursor-pointer mr-2"></i>
              <i className="far fa-trash-alt text-xl cursor-pointer"></i>
            </div>
          </NavLink>
          <NavLink
            to={"/edit-bot"}
            className="border-b border-opacity-25 w-full border-gray-700 flex items-center justify-between cursor-pointer mb-2"
          >
            <div className="info flex flex-col">
              <span className=" font-semibold text-admin text-base">
                Bạn tên gì ?
              </span>
              <span className="text-gray-500 text-xs">Tôi tên Huy</span>
            </div>
            <div>
              <i className="far fa-copy text-xl cursor-pointer mr-2"></i>
              <i className="far fa-trash-alt text-xl cursor-pointer"></i>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default BotPage;
