import React from "react";
import { NavLink } from "react-router-dom";
import TopLayout from "../layout/TopLayout";

const EditCharacters = () => {
  return (
    <>
      <TopLayout title={"Characters"} link={"/edit-char"}></TopLayout>
      <div className="w-full mt-[55px] py-3 flex flex-col items-end justify-end">
        <div className="flex items-center w-full p-2 ">
          <div className="w-20 h-20 mr-4 rounded-full">
            <img
              src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t31.18172-8/24883270_2011233349146147_1809347689485884861_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=2Db6A5isSEAAX9JDZ8d&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT-86yUUvdjhDtyV56z-wmmXG7k8eSDDGVgTPAWdW2QBKg&oe=62753B74"
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex items-end justify-between cursor-pointer flex-1 shrink-0">
            <input
              type="text"
              className=" border-b border-opacity-25 border-gray-700 outline-0 flex-1 shrink-0"
              placeholder="Name"
            />
          </div>
        </div>
        <div className="p-2 w-full flex items-end justify-between cursor-pointer">
          <label htmlFor="" className=" font-semibold mr-2">
            Description :
          </label>
          <input
            type="text"
            className=" border-b border-opacity-25 border-gray-700 outline-0 flex-1 shrink-0"
          />
        </div>
        <div className="flex items-center justify-between px-2 py-1 w-full bg-footer mt-3 mb-2 ">
          <span className=" font-semibold">Other info</span>
        </div>
        <div className="p-2 w-full flex items-end justify-between cursor-pointer">
          <label htmlFor="" className=" font-semibold mr-2 w-[30%]">
            Gender :
          </label>
          <input
            type="text"
            className=" border-b border-opacity-25 border-gray-700 outline-0 flex-1 shrink-0"
          />
        </div>
        <div className="p-2 w-full flex items-end justify-between cursor-pointer">
          <label htmlFor="" className=" font-semibold mr-2 w-[30%]">
            Age :
          </label>
          <input
            type="text"
            className=" border-b border-opacity-25 border-gray-700 outline-0 flex-1 shrink-0"
          />
        </div>
        <div className="p-2 w-full flex items-end justify-between cursor-pointer">
          <label htmlFor="" className=" font-semibold mr-2 w-[30%]">
            Height :
          </label>
          <input
            type="text"
            className=" border-b border-opacity-25 border-gray-700 outline-0 flex-1 shrink-0"
          />
        </div>
        <div className="p-2 w-full flex items-end justify-between cursor-pointer">
          <label htmlFor="" className=" font-semibold mr-2 w-[30%]">
            Weight :
          </label>
          <input
            type="text"
            className=" border-b border-opacity-25 border-gray-700 outline-0 flex-1 shrink-0"
          />
        </div>
        <div className="p-2 w-full flex items-end justify-between cursor-pointer">
          <label htmlFor="" className=" font-semibold mr-2 w-[30%]">
            Area :
          </label>
          <input
            type="text"
            className=" border-b border-opacity-25 border-gray-700 outline-0 flex-1 shrink-0"
          />
        </div>
        <NavLink
          to={"/"}
          className="p-2 flex items-end justify-between cursor-pointer"
        >
          <button className="py-1 px-4 rounded-sm bg-admin text-white uppercase">
            complete
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default EditCharacters;
