import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Container from "../components/Container";

const Root = () => {
  return (
    <div className="flex flex-col">
      
        <Header />
        <Outlet />
    </div>
  );
};

export default Root;
