import React from "react";
import { NavLink } from "react-router-dom";
import TopLayout from "../layout/TopLayout";

const Characters = () => {
  return (
    <>
      <TopLayout title={"Characters"} link={"/edit-char"}></TopLayout>
      <div className="w-full mt-[55px] py-3">
        <NavLink
          to={"/edit-char"}
          className="p-2 border-b border-opacity-25 w-full border-gray-700 flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center">
            <div className="w-9 h-9 rounded-full mr-2">
              <img
                src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t31.18172-8/24883270_2011233349146147_1809347689485884861_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=2Db6A5isSEAAX9JDZ8d&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT-86yUUvdjhDtyV56z-wmmXG7k8eSDDGVgTPAWdW2QBKg&oe=62753B74"
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="info flex flex-col">
              <span className=" font-semibold">Huy</span>
              <span className="text-gray-500 text-xs">HEART : Bot Huy</span>
            </div>
          </div>
          <div className="cursor-pointer w-6 h-6">
            <img
              src="https://img.icons8.com/windows/96/000000/chat--v1.png"
              alt=""
            />
          </div>
        </NavLink>
        <NavLink
          to={"/edit-char"}
          className="p-2 border-b border-opacity-25 w-full border-gray-700 flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center">
            <div className="w-9 h-9 rounded-full mr-2">
              <img
                src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t31.18172-8/24883270_2011233349146147_1809347689485884861_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=2Db6A5isSEAAX9JDZ8d&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT-86yUUvdjhDtyV56z-wmmXG7k8eSDDGVgTPAWdW2QBKg&oe=62753B74"
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="info flex flex-col">
              <span className=" font-semibold">Huy</span>
              <span className="text-gray-500 text-xs">HEART : Bot Huy</span>
            </div>
          </div>
          <div className="cursor-pointer w-6 h-6">
            <img
              src="https://img.icons8.com/windows/96/000000/chat--v1.png"
              alt=""
            />
          </div>
        </NavLink>
        <NavLink
          to={"/edit-char"}
          className="p-2 border-b border-opacity-25 w-full border-gray-700 flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center">
            <div className="w-9 h-9 rounded-full mr-2">
              <img
                src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t31.18172-8/24883270_2011233349146147_1809347689485884861_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=2Db6A5isSEAAX9JDZ8d&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT-86yUUvdjhDtyV56z-wmmXG7k8eSDDGVgTPAWdW2QBKg&oe=62753B74"
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="info flex flex-col">
              <span className=" font-semibold">Huy</span>
              <span className="text-gray-500 text-xs">HEART : Bot Huy</span>
            </div>
          </div>
          <div className="cursor-pointer w-6 h-6">
            <img
              src="https://img.icons8.com/windows/96/000000/chat--v1.png"
              alt=""
            />
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Characters;
