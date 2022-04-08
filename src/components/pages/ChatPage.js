import React from "react";
import { NavLink } from "react-router-dom";

const ChatPage = () => {
  return (
    <div className="container-iphone bg-white border-8 mt-10 border-black rounded-lg relative ">
      <div className="top absolute top-0 h-14 p-3 w-full flex items-center justify-between bg-admin z-[999]">
        <div className="flex items-center">
          <NavLink
            to={"/talk"}
            className="fas fa-angle-left text-3xl text-white mr-3 cursor-pointer"
          ></NavLink>
          <h1 className="text-2xl font-semibold text-white">Huy</h1>
        </div>
        <div className="flex items-center">
          <div className="search cursor-pointer">
            <i class="fas fa-bars text-white text-3xl "></i>
          </div>
        </div>
      </div>
      <div className="w-full mt-[55px] p-3 flex flex-col">
        <div className="overlay bg-footer absolute w-full h-full inset-0 z-[1]"></div>
        <div className="chat flex items-center  z-[999] mb-2">
          <span className="p-2 bg-admin text-white rounded-3xl text-sm">
            Bạn tên gì ?
          </span>
        </div>
        <div className="chat flex items-center z-[999]">
          <span className="p-2 bg-white text-black rounded-3xl text-sm">
            Tôi tên Huy
          </span>
        </div>
      </div>
      <div className="bar absolute bottom-0 h-11 border-t border-opacity-25 w-full border-gray-700 flex items-center justify-between px-3 z-[999] bg-white">
        <div className="bar text-lg cursor-pointer ">
          <i className="far fa-image mr-2"></i>
          <i class="far fa-smile"></i>
        </div>
        <div className="bar text-lg flex-1 shrink-0 flex items-center justify-center cursor-pointer ">
          <input
            type="text"
            className=" outline-0 border border-opacity-25 border-gray-800 rounded-lg w-[90%]"
          />
        </div>
        <div className="bar text-lg cursor-pointer ">
          <i className="far fa-paper-plane"></i>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
