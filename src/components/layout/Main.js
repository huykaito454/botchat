import React from "react";
import { Outlet } from "react-router-dom";
import FooterLayout from "./FooterLayout";

const Main = () => {
  return (
    <div className="container-iphone bg-white border-8 mt-10 border-black rounded-lg relative">
     
      <Outlet></Outlet>
      <FooterLayout></FooterLayout>
    </div>
  );
};

export default Main;
