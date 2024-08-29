import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layouts/Header";

const Root = () => {
  return (
    <div className="flex flex-col">
        <Header />
        <div className="w-full mt-5 bg-orange-500 h-[2px] shadow-2xl"></div>
        <Outlet />
    </div>
  );
};

export default Root;
