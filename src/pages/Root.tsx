import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layouts/Header";

const Root = () => {
  return (
    <div className="flex flex-col">
        <Header />
        <Outlet />
    </div>
  );
};

export default Root;
