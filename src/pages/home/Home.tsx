import React from "react";
import { FC } from "react";
import Hero from "../../components/Hero";
import Menu from "./Menu";
import Carousels from "./Carousels";
import Dishes from "../Dishes/Dishes";
import Container from "../../components/Container";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div>
      <div className="my-5">
        <Carousels />
      </div>
      <Container>
        <Dishes />
      </Container>
    </div>
  );
};

export default Home;
