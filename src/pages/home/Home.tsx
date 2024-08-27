import React from "react";
import { FC } from "react";
import Hero from "../../components/Hero";
import Menu from "./Menu";
import Carousels from "./Carousels";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div>
      <div className="my-5">
        <Carousels />
      </div>
      <Hero />
      <Menu />
    </div>
  );
};

export default Home;
