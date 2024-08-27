import React, { ReactNode } from "react";
import { FC } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="mx-4 md:mx-20">{children}</div>;
};

export default Container;
